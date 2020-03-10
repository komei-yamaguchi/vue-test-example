import { shallowMount } from '@vue/test-utils'
import SomeComponent from '@/components/SomeComponent'

describe('SomeComponent.vue', () => {
  it('表示文字列の確認', () => {
    const message = 'new message'
    const wrapper = shallowMount(SomeComponent, {
      propsData: { message }
    })
    expect(wrapper.text()).toMatch(message)
    expect(wrapper.text()).toMatch(String(message.length))
  })
  it('クラスが付与されていることの確認', () => {
    const type = 'one'
    const wrapper = shallowMount(SomeComponent, {
      propsData: { type }
    })
    expect(wrapper.classes()).toContain(`some-component--${type}`)
  })
  it('messageを指定した場合文字列の長さが表示される', () => {
    const message = 'test'
    const wrapper = shallowMount(SomeComponent, {
      propsData: { message }
    })
    expect(wrapper.text()).toMatch(String(message.length))
  })
  it('メソッドの戻り値の確認', () => {
    expect(SomeComponent.methods.someMethod()).toEqual('Fire someMethod')
  })
  it('Emit関連の確認', () => {
    const arg = 'arg'
    const wrapper = shallowMount(SomeComponent)
    wrapper.vm.someEmit(arg)
    // イベントが呼ばれたことの確認
    expect(wrapper.emitted('event-name')).toBeTruthy()
    // 何回呼ばれたか
    expect(wrapper.emitted('event-name').length).toBe(1)
    // 引数の確認
    expect(wrapper.emitted('event-name')[0]).toEqual(['arg'])
  })
})
