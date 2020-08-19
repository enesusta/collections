import LinkedStack from '../../src/stack/LinkedStack';

test('Stack push-pop test', () => {

    const stack = new LinkedStack();
    stack.push(1);
    stack.push(3);

    expect(stack.size).toBe(2);

    const pop = stack.pop();
    expect(pop).toBe(3);

});
