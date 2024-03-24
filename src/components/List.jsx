export default function List ({name, visible})
{
  let item = (visible ? <del>{name}</del> : name);
   return <li>{item}</li>
}
