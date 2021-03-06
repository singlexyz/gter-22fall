import React from 'react'
import { Listbox } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import './Select.scss'

function Select({ value, values, onChange, field, position = 'top' }) {
  const positionClass = `Select__options--` + position;
  return (
    <Listbox as="div" className={`Select`} value={value} onChange={(value) => onChange(field, value)}>
      <Listbox.Button className="Select__trigger">
        <span className="Select__trigger-text">
        { value ? values.filter(v => v.value === value)[0].name : '请选择' }
        </span>
        <FontAwesomeIcon className="Select__trigger-icon" icon={faChevronDown}></FontAwesomeIcon>
      </Listbox.Button>
      <Listbox.Options as="ul" className={`Select__options ${positionClass}`}>
        {values.map(({ value, name }) => (
          <Listbox.Option as={React.Fragment} key={value} value={value}>
            {({ selected }) => ( 
              <li className={`Select__option ${selected && 'Select__option--selected'}`}>
                {selected && <FontAwesomeIcon className="icon" icon={faCheck} />}
                {name}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default Select
