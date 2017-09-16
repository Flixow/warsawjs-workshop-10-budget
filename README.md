# #9 Connect transaction with category

## Cele:
- Wyświetlanie komponentów na podstawie wyfiltrowanej tablicy

## Kroki:
- [ ] Dodać wartość `selectedCategory` do initial state
- [ ] Stworzyć metodę `setCurrentCategory` i użyć ją w komponentach `CategoryCard` i `TransactionCard`
- [ ] Dodać filtrowanie transakcji na podstawie `selectedCategory` w komponencie `TransactionList`
- [ ] Wyświetlić komponent `CategoryCard` dla wartości `selectedCategory` jeżeli jest ustawiona
- [ ] Dodanie propsa `readOnly` i w zależności od niego zablokować możliwość modyfikacji kategorii z widoku `TransactionList`
- [ ] Dodanie klasy css do elementu `span` wyświetlającego wartość `budgeted` w zależności od propsa `readOnly`
- [ ] Dodać klasę css `link`
