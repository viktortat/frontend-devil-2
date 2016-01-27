export class Bug {
    constructor() {
        this.foo();
        this.bar();
    }
    foo() {
        console.log('foo');
    }
    bar() {
        console.log('bar');
    }
}