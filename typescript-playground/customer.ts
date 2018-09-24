export class Customer {
    constructor(private id: number) { }

    fooBar(): string {
        var self = this;
        const callback = function() {
            return 'ID ist \n' + self.id + '!';
        }

        const callback1 = () => `Die ID
ist ${this.id}!`;

        return callback1();
    }


    myMethod(arg: string | number) {
        if(typeof arg === 'number') {
            return arg;
        }
        return arg;
    }
}


export const foo = 'hallo';