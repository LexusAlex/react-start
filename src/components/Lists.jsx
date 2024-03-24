import List from "./List";

export default function Lists()
{
  const data = [
    ['Первый пункт списка', true],
    ['Второй пункт списка', false],
    ['Третий пункт списка', true],
  ];

  const filter = data.filter(element => element[1] === false);
  const elem = filter.map(element => <List key={element[0]} name={element[0]} visible={element[1]}></List>);

  return (<ul>{elem}</ul>
  )
}
