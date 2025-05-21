import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FilmlerPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Filmler</h1>
          <p className="text-muted-foreground">Tüm filmlerimizi keşfedin ve favorilerinizi bulun</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Film ara..." className="pl-8 w-full" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtreler
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-4">Kategoriler</h3>
            <div className="space-y-2">
              {[
                "Tüm Filmler",
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
                <div key={index} className="flex items-center">
                  <Link
                    href="#"
                    className={`text-sm ${index === 0 ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {category}
                  </Link>
                  {index === 0 && <span className="ml-auto text-xs text-muted-foreground">1248</span>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Yıl</h3>
            <div className="space-y-2">
              {[
                "Tüm Yıllar",
                "2024",
                "2023",
                "2022",
                "2021",
                "2020",
                "2010-2019",
                "2000-2009",
                "1990-1999",
                "1980-1989",
                "1970-1979",
              ].map((year, index) => (
                <div key={index} className="flex items-center">
                  <Link
                    href="#"
                    className={`text-sm ${index === 0 ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {year}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Puan</h3>
            <div className="space-y-2">
              {[
                "Tüm Puanlar",
                "9+ Mükemmel",
                "8+ Çok İyi",
                "7+ İyi",
                "6+ Ortalama Üstü",
                "5+ Ortalama",
                "4 ve altı",
              ].map((rating, index) => (
                <div key={index} className="flex items-center">
                  <Link
                    href="#"
                    className={`text-sm ${index === 0 ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {rating}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">1248 film bulundu</span>
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="popularity">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sıralama" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popülerliğe Göre</SelectItem>
                  <SelectItem value="rating">Puana Göre</SelectItem>
                  <SelectItem value="newest">En Yeniler</SelectItem>
                  <SelectItem value="oldest">En Eskiler</SelectItem>
                  <SelectItem value="a-z">A-Z</SelectItem>
                  <SelectItem value="z-a">Z-A</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="24">
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="Sayfa Başına" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                  <SelectItem value="48">48</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 24 }).map((_, index) => {
              // Simulating different movies
              const titles = [
                "Oppenheimer",
                "Barbie",
                "Interstellar",
                "Başlangıç",
                "Parazit",
                "Esaretin Bedeli",
                "Baba",
                "Kara Şövalye",
                "Pulp Fiction",
                "Forrest Gump",
                "Matrix",
                "Yüzüklerin Efendisi",
                "Yeşil Yol",
                "Yıldızlararası",
                "Gladyatör",
                "Titanik",
                "Avatar",
                "Star Wars",
                "Jurassic Park",
                "Indiana Jones",
                "Harry Potter",
                "Terminatör",
                "Geri Dönüş Yok",
                "Prestij",
                "Kuzuların Sessizliği",
              ]
              const years = [
                "2023",
                "2022",
                "2021",
                "2020",
                "2019",
                "2018",
                "2017",
                "2016",
                "2015",
                "2014",
                "2013",
                "2012",
                "2011",
                "2010",
              ]
              const ratings = ["9.2", "8.9", "8.7", "8.5", "8.3", "8.1", "7.9", "7.7", "7.5", "7.3", "7.1", "6.9"]

              const title = titles[index % titles.length]
              const year = years[index % years.length]
              const rating = ratings[index % ratings.length]

              return (
                <Card key={index} className="overflow-hidden border-0 bg-muted/40">
                  <div className="relative aspect-[2/3] overflow-hidden rounded-t-md">
                    <Image
                      src={`/placeholder.svg?height=450&width=300&text=${index + 1}`}
                      alt={title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-primary font-medium rounded-md px-1.5 py-0.5 text-sm">
                      {rating}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="line-clamp-1 text-base">{title}</CardTitle>
                    <CardDescription>{year}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronDown className="h-4 w-4 rotate-90" />
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="sm">
                42
              </Button>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
