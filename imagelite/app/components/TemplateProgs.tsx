interface TemplateProgs {
    children: React.ReactNode;
}
 export const Template: React.FC<TemplateProgs> =(progs: TemplateProgs) =>{
    return (
     <>
        <header/>
       {progs.children}
       <footer/>
     </>
    )
 }

 const Header: React.FC = () => {
    return (
      <header className= "bg-indigo=950 text-white py-3">
        <div className= " container mx-auto flex justify-betwee items-center px-4">
            <h1>ImageLite</h1>
        </div>
      </header>
    )
 }

 const Footer: React.FC = () => {
    return(
        <footer className="big-indigo-950 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center px-4">
            <h1>Developed by</h1>
            </div>
            </footer>
    );
}