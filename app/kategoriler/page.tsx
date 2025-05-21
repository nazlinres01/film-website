import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KategorilerPage() {
  const categories = [
    {
      id: "aksiyon",
      name: "Aksiyon",
      description: "Heyecan dolu, tempolu ve genellikle fiziksel mücadele içeren filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Aksiyon",
      count: 248,
      featured: ["John Wick", "Mad Max: Fury Road", "Die Hard", "Mission: Impossible"],
    },
    {
      id: "komedi",
      name: "Komedi",
      description: "Güldürmeyi ve eğlendirmeyi amaçlayan mizah dolu filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Komedi",
      count: 187,
      featured: ["Superbad", "The Hangover", "Borat", "Bridesmaids"],
    },
    {
      id: "drama",
      name: "Drama",
      description: "Ciddi, gerçekçi karakterler ve durumlar içeren duygusal filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Drama",
      count: 312,
      featured: ["The Shawshank Redemption", "Forrest Gump", "The Godfather", "Schindler's List"],
    },
    {
      id: "bilim-kurgu",
      name: "Bilim Kurgu",
      description: "Bilim ve teknolojinin spekülatif kullanımını içeren filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Bilim+Kurgu",
      count: 156,
      featured: ["Blade Runner", "The Matrix", "Interstellar", "Arrival"],
    },
    {
      id: "korku",
      name: "Korku",
      description: "İzleyicide korku, dehşet ve panik duyguları uyandırmayı amaçlayan filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Korku",
      count: 143,
      featured: ["The Shining", "Hereditary", "The Exorcist", "Get Out"],
    },
    {
      id: "romantik",
      name: "Romantik",
      description: "Aşk hikayelerini ve romantik ilişkileri konu alan filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Romantik",
      count: 176,
      featured: ["The Notebook", "Titanic", "Before Sunrise", "Pride & Prejudice"],
    },
    {
      id: "animasyon",
      name: "Animasyon",
      description: "Çizim, bilgisayar grafikleri veya stop-motion teknikleriyle yapılan filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Animasyon",
      count: 128,
      featured: ["Toy Story", "Spirited Away", "Spider-Man: Into the Spider-Verse", "Up"],
    },
    {
      id: "gerilim",
      name: "Gerilim",
      description: "Heyecan, merak ve endişe duygularını uyandıran, genellikle yüksek riskli durumlar içeren filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Gerilim",
      count: 167,
      featured: ["Se7en", "Silence of the Lambs", "Parasite", "Prisoners"],
    },
    {
      id: "belgesel",
      name: "Belgesel",
      description: "Gerçek olayları, kişileri veya durumları belgeleyen filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Belgesel",
      count: 94,
      featured: ["Planet Earth", "The Act of Killing", "Free Solo", "My Octopus Teacher"],
    },
    {
      id: "macera",
      name: "Macera",
      description: "Heyecan verici deneyimler, keşifler ve yolculuklar içeren filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Macera",
      count: 142,
      featured: ["Indiana Jones", "The Lord of the Rings", "Pirates of the Caribbean", "Jurassic Park"],
    },
    {
      id: "fantastik",
      name: "Fantastik",
      description: "Gerçek dünyada mümkün olmayan büyü, mitoloji ve doğaüstü unsurlar içeren filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Fantastik",
      count: 118,
      featured: ["Harry Potter", "The Lord of the Rings", "Pan's Labyrinth", "The Shape of Water"],
    },
    {
      id: "suc",
      name: "Suç",
      description: "Suç dünyasını, suçluları ve suç soruşturmalarını konu alan filmler.",
      image: "/placeholder.svg?height=400&width=800&text=Suç",
      count: 132,
      featured: ["The Godfather", "Pulp Fiction", "Goodfellas", "No Country for Old Men"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted/30 py-12">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-3xl font-bold mb-4">Film Kategorileri</h1>
              <p className="text-muted-foreground">
                Tüm film kategorilerimizi keşfedin ve zevkinize uygun filmleri bulun. Aksiyon, komedi, drama ve daha
                fazlası...
              </p>
            </div>

            <div className="relative max-w-md mx-auto mb-12">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Kategori ara..." className="pl-8 w-full" />
            </div>

            <Tabs defaultValue="tum-kategoriler" className="w-full">
              <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3">
                <TabsTrigger value="tum-kategoriler">Tüm Kategoriler</TabsTrigger>
                <TabsTrigger value="populer">Popüler</TabsTrigger>
                <TabsTrigger value="yeni-eklenen">Yeni Eklenen</TabsTrigger>
              </TabsList>

              <TabsContent value="tum-kategoriler" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <Link href={`/kategori/${category.id}`} key={category.id}>
                      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <h3 className="text-xl font-bold text-white">{category.name}</h3>
                            <p className="text-sm text-white/80">{category.count} film</p>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="populer" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 6)
                    .map((category) => (
                      <Link href={`/kategori/${category.id}`} key={category.id}>
                        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                          <div className="relative h-48">
                            <Image
                              src={category.image || "/placeholder.svg"}
                              alt={category.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            <div className="absolute bottom-4 left-4">
                              <h3 className="text-xl font-bold text-white">{category.name}</h3>
                              <p className="text-sm text-white/80">{category.count} film</p>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="yeni-eklenen" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories
                    .slice()
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 6)
                    .map((category) => (
                      <Link href={`/kategori/${category.id}`} key={category.id}>
                        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                          <div className="relative h-48">
                            <Image
                              src={category.image || "/placeholder.svg"}
                              alt={category.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            <div className="absolute bottom-4 left-4">
                              <h3 className="text-xl font-bold text-white">{category.name}</h3>
                              <p className="text-sm text-white/80">{category.count} film</p>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Öne Çıkan Kategoriler</h2>

            <div className="space-y-12">
              {categories.slice(0, 4).map((category) => (
                <div key={category.id} className="border-b pb-12 last:border-0">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/3">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Öne Çıkan Filmler:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.featured.map((film, index) => (
                            <Button key={index} variant="outline" size="sm">
                              {film}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <Button asChild>
                        <Link href={`/kategori/${category.id}`}>Tüm {category.name} Filmlerini Gör</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
