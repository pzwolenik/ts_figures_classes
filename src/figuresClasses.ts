export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides length cannot be below 0!');
    }

    if (
      Math.max(this.a, this.b, this.c) >=
      this.a + this.b + this.c - Math.max(this.a, this.b, this.c)
    ) {
      throw new Error(
        'The longest side must be shorter than the sum of the other two sides.',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius cannot be below 0!');
    }
  }

  getArea(): number {
    return Math.floor(Math.pow(this.radius, 2) * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides length cannot be below 0!');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
