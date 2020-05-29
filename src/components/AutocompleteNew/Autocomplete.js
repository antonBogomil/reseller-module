import React, { Component } from 'react'
import Downshift from 'downshift'
import { Container, Drop, Input, Menu, MenuItem, ToggleButton, ToggleIcon } from './styled'
import Loader from "./loader";

type Item = {
  key: string | number,
  value: string | number,
}
type Props = {
  items: Item[],
  initialSelected?: Item,
  onChange: Function,
  onInput?: Function,
  selected?: Item | {},
  loading?: boolean,
}

class AutocompleteNew extends Component<Props> {
  state = {
    filter: '',
  }
  onSelect = selected => {
    this.props.onChange(selected)
    this.setState({ filter: '' })
  }
  onInputFilter = e => {
    this.setState({ filter: e.target.value })
    this.props.onInput && this.props.onInput(e.target.value)
  }

  render() {
    const { items, selected, initialSelected,loading } = this.props
    const { filter } = this.state
    return (
      <>
        <Downshift
          onChange={this.onSelect}
          itemToString={itemToString}
          initialSelectedItem={initialSelected}
          selectedItem={selected}
          inputValue={filter}
        >
          {({
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getItemProps,
            isOpen,
            selectedItem,
            highlightedIndex,
            inputValue,
          }) => {
            return (
              <div>
                <Container>
                  <ToggleButton isOpen={isOpen} {...getToggleButtonProps()}>
                    <span>{selectedItem.value}</span>
                    <ToggleIcon isOpen={isOpen} />
                  </ToggleButton>
                  {isOpen && (
                    <Drop isOpen={isOpen}>
                      <div style={{ padding: '3px 4px' }}>
                        <Input autoFocus {...getInputProps()} onChange={this.onInputFilter} />
                      </div>
                      <div style={{ position: 'relative' }}>
                        <Menu {...getMenuProps({ isOpen })}>
                          {items
                            .filter(
                              (item: Item) =>
                                !filter || item.value.toLowerCase().includes(filter.toLowerCase()),
                            )
                            .map((item, index) => {
                              return (
                                <MenuItem
                                  key={item.key}
                                  {...getItemProps({
                                    item,
                                    index,
                                    isActive: highlightedIndex === index,
                                    isSelected: selectedItem.key === item.key,
                                  })}
                                >
                                  {itemToString(item)}
                                </MenuItem>
                              )
                            })}
                        </Menu>
                      </div>
                      {loading && <Loader/>}
                    </Drop>
                  )}
                </Container>
              </div>
            )
          }}
        </Downshift>
      </>
    )
  }
}

const itemToString = (item: Item) => (item ? item.value : '')

export default AutocompleteNew
