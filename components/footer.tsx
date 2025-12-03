export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {currentYear} Neharika Gond — All Rights Reserved
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
