class Somador {
    constructor() {
        this.calcular = (n1, n2) => {
            return n1 + n2;
        };
    }
}
class Subtrator {
    constructor() {
        this.calcular = (n1, n2) => {
            return n1 - n2;
        };
    }
}
class Multiplicador {
    constructor() {
        this.calcular = (n1, n2) => {
            return n1 * n2;
        };
    }
}
class Divisor {
    constructor() {
        this.calcular = (n1, n2) => {
            return n1 / n2;
        };
    }
}
export { Somador, Subtrator, Multiplicador, Divisor };
