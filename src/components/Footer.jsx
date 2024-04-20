export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&#169; {currentYear} #ALTERNATEMED</p>
    </footer>
  )
}
