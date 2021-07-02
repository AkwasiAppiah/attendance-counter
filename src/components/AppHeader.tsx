interface AppHeaderProps {
  title: string;
}



function AppHeader({ title }: AppHeaderProps): JSX.Element {
  const isBigger = title.length >= 5
  const isSmaller = !isBigger
    
  return (
  
    <header>
      <h1>{title}</h1>
     {isSmaller &&  
        <>
        <p>(The title is a work-in-progress)</p>
        </>}
    </header>
    
 );
}

export default AppHeader