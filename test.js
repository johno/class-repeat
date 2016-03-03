import test from 'ava'
import classRepeat from './'

test('class-repeat repeats classes', t => {
  t.plan(5)

  t.same(classRepeat('.foo.bar'), '.foo.foo.bar.bar')
  t.same(classRepeat('.foo:before'), '.foo:before.foo:before')
  t.same(classRepeat('.foo .bar.baz'), '.foo.foo .bar.bar.baz.baz')
  t.same(classRepeat('input.foo-bar.baz > .pizazz'), 'input.foo-bar.foo-bar.baz.baz > .pizazz.pizazz')
  t.same(classRepeat('.foo', { repeat: 4 }), '.foo.foo.foo.foo')
})
