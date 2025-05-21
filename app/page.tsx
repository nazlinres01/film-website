import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[70vh] w-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Featured film"
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-background/5" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
              <Badge className="mb-4">Yeni Çıkan</Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white">Dune: Çöl Gezegeni</h1>
              <p className="text-lg md:text-xl max-w-2xl mb-6 text-white/90">
                Uzak bir gelecekte geçen destansı bir macera, ailesinin kontrolündeki çöl gezegeni Arrakis'i korumak
                için savaşan Paul Atreides'in hikayesini anlatıyor.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg">Şimdi İzle</Button>
                <Button size="lg" variant="outline">
                  Fragmanı İzle
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popüler Filmler</h2>
            <Link href="/filmler" className="text-sm font-medium text-primary hover:underline">
              Tümünü Gör
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Oppenheimer",
                image: "/placeholder.svg?height=450&width=300",
                rating: "8.5",
                year: "2023",
              },
              {
                title: "Barbie",
                image: "/placeholder.svg?height=450&width=300",
                rating: "7.3",
                year: "2023",
              },
              {
                title: "Interstellar",
                image: "/placeholder.svg?height=450&width=300",
                rating: "8.7",
                year: "2014",
              },
              {
                title: "Başlangıç",
                image: "/placeholder.svg?height=450&width=300",
                rating: "8.8",
                year: "2010",
              },
              {
                title: "Parazit",
                image: "/placeholder.svg?height=450&width=300",
                rating: "8.6",
                year: "2019",
              },
            ].map((movie, index) => (
              <Card key={index} className="overflow-hidden border-0 bg-muted/40">
                <div className="relative aspect-[2/3] overflow-hidden rounded-t-md">
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-primary font-medium rounded-md px-1.5 py-0.5 text-sm">
                    {movie.rating}
                  </div>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="line-clamp-1 text-base">{movie.title}</CardTitle>
                  <CardDescription>{movie.year}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Kategoriler</h2>
            <Link href="/kategoriler" className="text-sm font-medium text-primary hover:underline">
              Tümünü Gör
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Aksiyon",
              "Komedi",
              "Drama",
              "Bilim Kurgu",
              "Korku",
              "Romantik",
              "Animasyon",
              "Gerilim",
              "Belgesel",
              "Macera",
              "Fantastik",
              "Suç",
            ].map((category, index) => (
              <Link
                href={`/kategori/${category.toLowerCase()}`}
                key={index}
                className="bg-muted/40 hover:bg-muted rounded-lg p-4 text-center transition-colors"
              >
                <span className="font-medium">{category}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-muted/50 py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Yakında Vizyona Girecekler</h2>
              <Link href="/yakinda" className="text-sm font-medium text-primary hover:underline">
                Tümünü Gör
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Gladyatör 2",
                  image: "/placeholder.svg?height=400&width=800",
                  date: "22 Kasım 2024",
                  description: "Ridley Scott'ın yönettiği efsanevi Gladyatör filminin devam filmi.",
                },
                {
                  title: "Joker: Folie à Deux",
                  image: "/placeholder.svg?height=400&width=800",
                  date: "4 Ekim 2024",
                  description:
                    "Arthur Fleck'in hikayesinin devamı, bu sefer müzikal bir yapım olarak karşımıza çıkıyor.",
                },
                {
                  title: "Dune: Çöl Gezegeni Bölüm 2",
                  image: "/placeholder.svg?height=400&width=800",
                  date: "15 Mart 2024",
                  description: "Denis Villeneuve'ün yönettiği Dune serisinin ikinci filmi.",
                },
              ].map((movie, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-2">
                      {movie.date}
                    </Badge>
                    <CardTitle className="mb-2">{movie.title}</CardTitle>
                    <CardDescription>{movie.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Hatırlat
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="rounded-xl overflow-hidden bg-muted/30 border">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Film Dünyasından Haberdar Olun</h2>
                <p className="text-muted-foreground mb-6">
                  En yeni film haberleri, özel içerikler ve yaklaşan filmler hakkında bilgi almak için bültenimize abone
                  olun.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input placeholder="E-posta adresiniz" type="email" />
                  <Button>Abone Ol</Button>
                </div>
              </div>
              <div className="relative min-h-[300px]">
                <Image src="/placeholder.svg?height=600&width=800" alt="Newsletter" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
