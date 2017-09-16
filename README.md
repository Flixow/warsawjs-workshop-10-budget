# #5 Category card component

## Cele:
- Utrwalenie komponentowego myślenia w react

## Kroki:
- [ ] Dodać do initial state najwyższego komponentu listę kategorii
- [ ] Wyświetlić stateless `CategoryCard` komponent dla 0 elementu tablicy `categories`
- [ ] Dodać metodę `handleChangeCategoryBudget` do najwyższego komponentu oraz przekazać ją do komponentu `CategoryCard`
- [ ] Wyświetlić input obok wartości `budgeted`
- [ ] Dodać logikę wyświetlania input/value w zależności od wartości `editMode` w state komponentu `CategoryCard` (zmieniamy stateless na stateful)
```
  handleChangeEditMode = () => {
    this.setState({ editMode: !this.state.editMode});
  }
```
- [ ] Dodać metodę `handleSubmit` która wywoła metodę `handleChangeCategoryBudget`
- [ ] Dodać handler na klawisz `enter` wywołujący submit forma oraz przekazać go jako `onKeyPress` props do `input`
```
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }
```
