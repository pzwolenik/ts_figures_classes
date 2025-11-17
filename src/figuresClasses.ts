export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  a: number;

  b: number;

  c: number;

  color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides length cannot be below 0!');
    }

    if (
      Math.max(this.a, this.b, this.c) >=
      this.a + this.b + this.c - Math.max(this.a, this.b, this.c)
    ) {
      throw new Error(
        'the longest side of a triangle must be >= than a sum of two others',
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

  radius: number;

  color: 'red' | 'green' | 'blue';

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.radius = radius;
    this.color = color;

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

  width: number;

  height: number;

  color: 'red' | 'green' | 'blue';

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.width = width;
    this.height = height;
    this.color = color;

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
