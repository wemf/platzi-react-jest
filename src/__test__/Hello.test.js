import React from 'react'
import Hello from '../components/Hello'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Añadiendo pruebas a React', () => {
    test('Comprobamos el texto que recibe por props', () => {
        const data = { title: "Hola Jest" }
        const wrapper = mount(
            <Hello title={data.title} />
        )
        const h1 = wrapper.find('h1')
        expect(h1.text()).toBe('Hola Jest')
    })
})