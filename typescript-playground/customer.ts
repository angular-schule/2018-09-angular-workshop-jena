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
}


export const foo = 'hallo';