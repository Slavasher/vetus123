# ТЗ разработчику: сайт-сервис заказа подборки архивных мест

## 1) Страницы и UI-компоненты

**Страницы:**
- Главная
- Как это работает
- Тарифы/калькулятор
- Карта (выбор региона/зоны)
- Оформление заказа
- Оплата/статусы
- Личный кабинет
- Карточка места
- FAQ/поддержка
- Политика/оферта/конфиденциальность
- Админ-панель

**UI-компоненты:**
- Header / Footer
- Hero
- Value propositions
- Карта (демо/реальная)
- Калькулятор
- Форма заказа
- Список заказов
- Карточка места
- PDF download
- Админ-форма создания места

## 2) Бизнес-логика заказа

**Правила:**
- Цена: 700 ₽ за место
- Минимум: 7 мест
- Итоговая цена = max(кол-во, 7) * 700

**Статусы заказа:**
- draft → pending_payment → paid → in_progress → delivered → cancelled

**Логика:**
- После создания заказа статус `pending_payment`
- После подтверждения оплаты → `paid`
- Выдача контента → `delivered`

## 3) API endpoints (REST) + JSON

**POST /api/orders**
```json
{
  "regionId": "central",
  "placesCount": 10,
  "contactName": "Иван",
  "contactEmail": "ivan@example.com",
  "contactPhone": "+7..."
}
```
**Response**
```json
{ "id": "order_123", "status": "pending_payment", "totalPrice": 7000 }
```

**GET /api/orders**
```json
{ "orders": [ { "id": "...", "status": "pending_payment", "placesCount": 7, "totalPrice": 4900 } ] }
```

**POST /api/places**
```json
{ "name": "Село Петрово", "regionId": "central", "latitude": 55.2, "longitude": 36.5 }
```

**GET /api/orders/{id}/pdf**
- Возвращает PDF файл

**POST /api/payment**
```json
{ "orderId": "...", "amount": 4900 }
```

## 4) Схема БД (таблицы и поля)
- Users(id, email, role, name, phone)
- Orders(id, userId, status, totalPrice, placesCount, contactName, contactEmail, contactPhone)
- OrderItems(id, orderId, placeId, price)
- Payments(id, orderId, provider, status, amount, receiptUrl)
- Regions(id, name, parentId)
- Places(id, name, description, latitude, longitude, regionId)
- PlaceReports(id, placeId, 10 полей отчета)
- Files(id, placeId, type, url)
- AuditLogs(id, userId, action, meta)

## 5) Безопасность и анти-копирование
- Watermark PDF (email + id заказа)
- Лимиты скачивания
- Без прямых ссылок на файлы
- Rate limiting на API
- Логи действий в AuditLogs

## 6) Интеграции
- Карты: Yandex Maps API / Mapbox
- Платежи: ЮKassa / CloudPayments / Robokassa
- Уведомления: email (Sendgrid/Mail.ru) + Telegram (опционально)

## 7) Acceptance criteria

**Лендинг:**
- Есть CTA на карту и заказ

**Калькулятор:**
- При значении < 7 пересчитывает до 7

**Заказ:**
- Создается запись в БД
- Итоговая цена корректная

**Кабинет:**
- Список заказов отображается

**PDF:**
- Генерируется документ
- Содержит watermark

**Админ:**
- Создание места работает
- Координаты сохраняются
