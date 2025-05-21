import Link from "next/link"
import Image from "next/image"
import { Film } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Film className="h-6 w-6" />
              <span>CinemaWorld</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              CinemaWorld, film tutkunları için en güncel ve kapsamlı film platformudur.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Keşfet</h3>
            <div className="grid gap-3">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Ana Sayfa
              </Link>
              <Link href="/filmler" className="text-sm text-muted-foreground hover:text-foreground">
                Filmler
              </Link>
              <Link href="/kategoriler" className="text-sm text-muted-foreground hover:text-foreground">
                Kategoriler
              </Link>
              <Link href="/en-iyiler" className="text-sm text-muted-foreground hover:text-foreground">
                En İyiler
              </Link>
              <Link href="/yakinda" className="text-sm text-muted-foreground hover:text-foreground">
                Yakında
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Hakkımızda</h3>
            <div className="grid gap-3">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Hakkımızda
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                İletişim
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Kariyer
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                SSS
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Yasal</h3>
            <div className="grid gap-3">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Kullanım Şartları
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Çerez Politikası
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                KVKK
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CinemaWorld. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Image src="/placeholder.svg?height=30&width=50" alt="Payment" width={50} height={30} />
            <Image src="/placeholder.svg?height=30&width=50" alt="Payment" width={50} height={30} />
            <Image src="/placeholder.svg?height=30&width=50" alt="Payment" width={50} height={30} />
            <Image src="/placeholder.svg?height=30&width=50" alt="Payment" width={50} height={30} />
          </div>
        </div>
      </div>
    </footer>
  )
}
