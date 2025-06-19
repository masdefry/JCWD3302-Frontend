import { ICardProps } from './types';

function Card(props: ICardProps) {
  return (
    <section
      style={{
        width: '200px',
        borderRadius: '10px',
        backgroundColor: 'green',
        padding: '10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={props?.icon} />
        <h1 style={{ fontSize: '30px' }}>Title</h1>
      </div>
      <p>{props?.description}</p>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCXg6UeXOEXkIHfQlfrmXXuv6ZsdMjoEIvg&s' />
    </section>
  );
}

export default Card;
