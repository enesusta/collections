import Stack from '../../src/stack/Stack';

test('Stack push-pop test', () => {

    const stack = new Stack();
    stack.push(1);
    stack.push(3);

    expect(stack.size).toBe(2);

    const pop = stack.pop();
    expect(pop).toBe(3);

});