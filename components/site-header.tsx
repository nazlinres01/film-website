import Link from "next/link"
import { Film, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Film className="h-6 w-6" />
          <span>CinemaWorld</span>
        </Link>
        <nav className="hidden md:flex gap-6 ml-10">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Ana Sayfa
          </Link>
          <Link
            href="/filmler"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Filmler
          </Link>
          <Link
            href="/kategoriler"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Kategoriler
          </Link>
          <Link
            href="/en-iyiler"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            En İyiler
          </Link>
          <Link
            href="/yakinda"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Yakında
          </Link>
        </nav>
        <div className="flex items-center ml-auto gap-4">
          <form className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Film veya dizi ara..." className="pl-8 bg-background" />
          </form>
          <Button variant="outline" size="icon" className="md:hidden">
            <Search className="h-4 w-4" />
            <span className="sr-only">Ara</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menü</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 mt-10">
                <Link href="/" className="text-lg font-medium">
                  Ana Sayfa
                </Link>
                <Link href="/filmler" className="text-lg font-medium">
                  Filmler
                </Link>
                <Link href="/kategoriler" className="text-lg font-medium">
                  Kategoriler
                </Link>
                <Link href="/en-iyiler" className="text-lg font-medium">
                  En İyiler
                </Link>
                <Link href="/yakinda" className="text-lg font-medium">
                  Yakında
                </Link>
                <div className="border-t pt-6 mt-4">
                  <Button className="w-full" asChild>
                    <Link href="/giris">Giriş Yap</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button className="hidden md:flex" asChild>
            <Link href="/giris">Giriş Yap</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
