import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FilmCard } from "@/components/film-card"
import { ChevronDown, Filter, Search } from "lucide-react"
import Image from "next/image"

export default function KategoriPage({ params }: { params: { id: string } }) {
  // Kategori bilgilerini ID'ye göre alıyoruz (gerçek uygulamada API'den gelecek)
  const categories = {
    aksiyon: {
      name: "Aksiyon",
      description:
        "Aksiyon filmleri, heyecan dolu, tempolu ve genellikle fiziksel mücadele içeren filmlerdir. Bu tür filmler, genellikle kahramanların zorlu durumlarda mücadele ettiği, çatışma ve şiddet içeren sahnelerin yer aldığı yapımlardır.",
      image: "/placeholder.svg?height=600&width=1200&text=Aksiyon",
      count: 248,
    },
    komedi: {
      name: "Komedi",
      description:
        "Komedi filmleri, güldürmeyi ve eğlendirmeyi amaçlayan mizah dolu filmlerdir. Bu tür filmler, genellikle komik durumlar, diyaloglar ve karakterler içerir ve izleyicilerde neşe ve kahkaha uyandırmayı hedefler.",
      image: "/placeholder.svg?height=600&width=1200&text=Komedi",
      count: 187,
    },
    drama: {
      name: "Drama",
      description:
        "Drama filmleri, ciddi, gerçekçi karakterler ve durumlar içeren duygusal filmlerdir. Bu tür filmler, genellikle insan ilişkilerini, toplumsal sorunları ve duygusal çatışmaları ele alır ve izleyicide düşünce ve empati uyandırmayı amaçlar.",
      image: "/placeholder.svg?height=600&width=1200&text=Drama",
      count: 312,
    },
    "bilim-kurgu": {
      name: "Bilim Kurgu",
      description:
        "Bilim kurgu filmleri, bilim ve teknolojinin spekülatif kullanımını içeren filmlerdir. Bu tür filmler, genellikle gelecekteki dünyaları, uzay yolculuklarını, zaman yolculuğunu, yapay zekayı ve diğer bilimsel kavramları konu alır.",
      image: "/placeholder.svg?height=600&width=1200&text=Bilim+Kurgu",
      count: 156,
    },
    korku: {
      name: "Korku",
      description:
        "Korku filmleri, izleyicide korku, dehşet ve panik duyguları uyandırmayı amaçlayan filmlerdir. Bu tür filmler, genellikle doğaüstü varlıklar, seri katiller, hayaletler, canavarlar veya diğer korkutucu unsurları içerir.",
      image: "/placeholder.svg?height=600&width=1200&text=Korku",
      count: 143,
    },
    romantik: {
      name: "Romantik",
      description:
        "Romantik filmler, aşk hikayelerini ve romantik ilişkileri konu alan filmlerdir. Bu tür filmler, genellikle iki kişi arasındaki duygusal bağı, aşkın zorluklarını ve güzelliklerini anlatır.",
      image: "/placeholder.svg?height=600&width=1200&text=Romantik",
      count: 176,
    },
  }

  const category = categories[params.id as keyof typeof categories] || {
    name: "Kategori Bulunamadı",
    description: "Aradığınız kategori bulunamadı.",
    image: "/placeholder.svg?height=600&width=1200&text=Kategori+Bulunamadı",
    count: 0,
  }

  // Örnek film listesi (gerçek uygulamada API'den gelecek)
  const films = Array.from({ length: 24 }).map((_, index) => {
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

    return {
      id: index.toString(),
      title,
      year,
      rating,
      image: `/placeholder.svg?height=450&width=300&text=${index + 1}`,
    }
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[40vh] w-full overflow-hidden">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-background/5" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white">{category.name} Filmleri</h1>
              <p className="text-lg max-w-3xl mb-6 text-white/90">{category.description}</p>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <p className="text-muted-foreground">{category.count} film bulundu</p>
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
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {films.map((film) => (
              <FilmCard
                key={film.id}
                id={film.id}
                title={film.title}
                year={film.year}
                rating={film.rating}
                image={film.image}
              />
            ))}
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
                12
              </Button>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
