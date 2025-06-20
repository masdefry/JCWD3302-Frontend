'use client';
import Link from 'next/link';
import React from 'react';

interface IPageProps {}

interface IState {
  counter: number;
  description: string;
}

let number = 0;

class Page extends React.Component<IPageProps, IState> {
  constructor(props: IPageProps) {
    super(props);
    this.state = {
      counter: 0,
      description: '',
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  //   Dieksekusi ketika halaman dibuka
  componentDidMount() {
    console.log('componentDidMount');
  }

  //   Dieksekusi ketika terjadi perubahan state/props
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  //   Dieksekusi ketika akan dihapus dari browser/ketika terjadi perpindahan halaman
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render(): React.ReactNode {
    return (
      <>
        {console.log('Rendering First')}
        <h1>Ini Class Component</h1>
        <h1>{this.state.counter}</h1>
        <p>{this.state.description}</p>
        <button onClick={this.increment}>+</button>
        <Link href={'/login'}>Goto Login Page</Link>
      </>
    );
  }
}

export default Page;

// > STATE
// Menyimpan data. Data didalam state bisa berubah.
// Ketika terjadi perubahan data, state punya kemampuan untuk mengupdate DOM secara otomatis

// > LIFECYCLE METHODS
// 1. Render
// 2. Pada saat dibuka di browser
// 3. Pada saat telah dibuka di browser dan terjadi perubahan state/props
// 4. Pada saat akan dihapus dari browser
