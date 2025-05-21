import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Film } from "lucide-react"

export default function GirisPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-md space-y-6">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <Film className="h-10 w-10" />
            </div>
            <h1 className="text-2xl font-bold">CinemaWorld'e Hoş Geldiniz</h1>
            <p className="text-muted-foreground">Film dünyasına giriş yapın veya hesap oluşturun</p>
          </div>

          <Tabs defaultValue="giris" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="giris">Giriş Yap</TabsTrigger>
              <TabsTrigger value="kayit">Kayıt Ol</TabsTrigger>
            </TabsList>
            <TabsContent value="giris" className="space-y-4 pt-4">
              <form>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input id="email" placeholder="ornek@mail.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Şifre</Label>
                      <Link href="/sifremi-unuttum" className="text-sm text-primary hover:underline">
                        Şifremi Unuttum
                      </Link>
                    </div>
                    <Input id="password" type="password" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm font-normal">
                      Beni hatırla
                    </Label>
                  </div>
                  <Button type="submit" className="w-full">
                    Giriş Yap
                  </Button>
                </div>
              </form>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">veya</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
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
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </Button>
                <Button variant="outline" className="w-full">
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
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  Google
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="kayit" className="space-y-4 pt-4">
              <form>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Ad</Label>
                      <Input id="first-name" placeholder="Adınız" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Soyad</Label>
                      <Input id="last-name" placeholder="Soyadınız" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-register">E-posta</Label>
                    <Input id="email-register" placeholder="ornek@mail.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-register">Şifre</Label>
                    <Input id="password-register" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-confirm">Şifre Tekrar</Label>
                    <Input id="password-confirm" type="password" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      <span>
                        <Link href="/kullanim-sartlari" className="text-primary hover:underline">
                          Kullanım Şartları
                        </Link>
                        {" ve "}
                        <Link href="/gizlilik-politikasi" className="text-primary hover:underline">
                          Gizlilik Politikası
                        </Link>
                        {"'nı kabul ediyorum"}
                      </span>
                    </Label>
                  </div>
                  <Button type="submit" className="w-full">
                    Kayıt Ol
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
