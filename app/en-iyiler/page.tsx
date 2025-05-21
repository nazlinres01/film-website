import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FilmCard } from "@/components/film-card"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EnIyilerPage() {
  // Örnek film listeleri
  const topRatedFilms = [
    {
      id: "1",
      title: "Esaretin Bedeli",
      year: "1994",
      rating: "9.3",
      image: "/placeholder.svg?height=450&width=300",
      director: "Frank Darabont",
      genre: ["Drama"],
    },
    {
      id: "2",
      title: "Baba",
      year: "1972",
      rating: "9.2",
      image: "/placeholder.svg?height=450&width=300",
      director: "Francis Ford Coppola",
      genre: ["Suç", "Drama"],
    },
    {
      id: "3",
      title: "Kara Şövalye",
      year: "2008",
      rating: "9.0",
      image: "/placeholder.svg?height=450&width=300",
      director: "Christopher Nolan",
      genre: ["Aksiyon", "Suç", "Drama"],
    },
    {
      id: "4",
      title: "Baba 2",
      year: "1974",
      rating: "9.0",
      image: "/placeholder.svg?height=450&width=300",
      director: "Francis Ford Coppola",
      genre: ["Suç", "Drama"],
    },
    {
      id: "5",
      title: "12 Öfkeli Adam",
      year: "1957",
      rating: "9.0",
      image: "/placeholder.svg?height=450&width=300",
      director: "Sidney Lumet",
      genre: ["Suç", "Drama"],
    },
    {
      id: "6",
      title: "Schindler'in Listesi",
      year: "1993",
      rating: "9.0",
      image: "/placeholder.svg?height=450&width=300",
      director: "Steven Spielberg",
      genre: ["Biyografi", "Drama", "Tarih"],
    },
    {
      id: "7",
      title: "Yüzüklerin Efendisi: Kralın Dönüşü",
      year: "2003",
      rating: "9.0",
      image: "/placeholder.svg?height=450&width=300",
      director: "Peter Jackson",
      genre: ["Aksiyon", "Macera", "Drama"],
    },
    {
      id: "8",
      title: "Pulp Fiction",
      year: "1994",
      rating: "8.9",
      image: "/placeholder.svg?height=450&width=300",
      director: "Quentin Tarantino",
      genre: ["Suç", "Drama"],
    },
    {
      id: "9",
      title: "Yüzüklerin Efendisi: Yüzük Kardeşliği",
      year: "2001",
      rating: "8.8",
      image: "/placeholder.svg?height=450&width=300",
      director: "Peter Jackson",
      genre: ["Aksiyon", "Macera", "Drama"],
    },
    {
      id: "10",
      title: "İyi, Kötü ve Çirkin",
      year: "1966",
      rating: "8.8",
      image: "/placeholder.svg?height=450&width=300",
      director: "Sergio Leone",
      genre: ["Western"],
    },
  ]

  const popularFilms = [
    {
      id: "1",
      title: "Oppenheimer",
      year: "2023",
      rating: "8.5",
      image: "/placeholder.svg?height=450&width=300",
      director: "Christopher Nolan",
      genre: ["Biyografi", "Drama", "Tarih"],
    },
    {
      id: "2",
      title: "Barbie",
      year: "2023",
      rating: "7.3",
      image: "/placeholder.svg?height=450&width=300",
      director: "Greta Gerwig",
      genre: ["Komedi", "Macera", "Fantastik"],
    },
    {
      id: "3",
      title: "Dune",
      year: "2021",
      rating: "8.0",
      image: "/placeholder.svg?height=450&width=300",
      director: "Denis Villeneuve",
      genre: ["Aksiyon", "Macera", "Bilim Kurgu"],
    },
    {
      id: "4",
      title: "Top Gun: Maverick",
      year: "2022",
      rating: "8.3",
      image: "/placeholder.svg?height=450&width=300",
      director: "Joseph Kosinski",
      genre: ["Aksiyon", "Drama"],
    },
    {
      id: "5",
      title: "Avatar: Suyun Yolu",
      year: "2022",
      rating: "7.6",
      image: "/placeholder.svg?height=450&width=300",
      director: "James Cameron",
      genre: ["Aksiyon", "Macera", "Bilim Kurgu"],
    },
    {
      id: "6",
      title: "Her Şey Her Yerde Aynı Anda",
      year: "2022",
      rating: "7.9",
      image: "/placeholder.svg?height=450&width=300",
      director: "Daniel Kwan, Daniel Scheinert",
      genre: ["Aksiyon", "Macera", "Komedi"],
    },
    {
      id: "7",
      title: "Joker",
      year: "2019",
      rating: "8.4",
      image: "/placeholder.svg?height=450&width=300",
      director: "Todd Phillips",
      genre: ["Suç", "Drama", "Gerilim"],
    },
    {
      id: "8",
      title: "Parazit",
      year: "2019",
      rating: "8.5",
      image: "/placeholder.svg?height=450&width=300",
      director: "Bong Joon Ho",
      genre: ["Komedi", "Drama", "Gerilim"],
    },
    {
      id: "9",
      title: "Spider-Man: Örümcek-Evreninde",
      year: "2018",
      rating: "8.4",
      image: "/placeholder.svg?height=450&width=300",
      director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
      genre: ["Animasyon", "Aksiyon", "Macera"],
    },
    {
      id: "10",
      title: "Başlangıç",
      year: "2010",
      rating: "8.8",
      image: "/placeholder.svg?height=450&width=300",
      director: "Christopher Nolan",
      genre: ["Aksiyon", "Macera", "Bilim Kurgu"],
    },
  ]

  const classicFilms = [
    {
      id: "1",
      title: "Casablanca",
      year: "1942",
      rating: "8.5",
      image: "/placeholder.svg?height=450&width=300",
      director: "Michael Curtiz",
      genre: ["Drama", "Romantik", "Savaş"],
    },
    {
      id: "2",
      title: "Yurttaş Kane",
      year: "1941",
      rating: "8.3",
      image: "/placeholder.svg?height=450&width=300",
      director: "Orson Welles",
      genre: ["Drama", "Gizem"],
    },
    {
      id: "3",
      title: "Rüzgar Gibi Geçti",
      year: "1939",
      rating: "8.2",
      image: "/placeholder.svg?height=450&width=300",
      director: "Victor Fleming",
      genre: ["Drama", "Romantik", "Savaş"],
    },
    {
      id: "4",
      title: "Metropolis",
      year: "1927",
      rating: "8.3",
      image: "/placeholder.svg?height=450&width=300",
      director: "Fritz Lang",
      genre: ["Bilim Kurgu", "Drama"],
    },
    {
      id: "5",
      title: "Modern Zamanlar",
      year: "1936",
      rating: "8.5",
      image: "/placeholder.svg?height=450&width=300",
      director: "Charlie Chaplin",
      genre: ["Komedi", "Drama"],
    },
    {
      id: "6",
      title: "Şehir Işıkları",
      year: "1931",
      rating: "8.5",
      image: "/placeholder.svg?height=450&width=300",
      director: "Charlie Chaplin",
      genre: ["Komedi", "Drama", "Romantik"],
    },
    {
      id: "7",
      title: "Sinema Cenneti",
      year: "1988",
      rating: "8.5",
      image: "/placeholder.svg?height=450&width=300",
      director: "Giuseppe Tornatore",
      genre: ["Drama"],
    },
    {
      id: "8",
      title: "Vertigo",
      year: "1958",
      rating: "8.3",
      image: "/placeholder.svg?height=450&width=300",
      director: "Alfred Hitchcock",
      genre: ["Gizem", "Romantik", "Gerilim"],
    },
    {
      id: "9",
      title: "Sapık",
      year: "1960",
      rating: "8.5",
      image: "/placeholder.svg?height=450&width=300",
      director: "Alfred Hitchcock",
      genre: ["Korku", "Gizem", "Gerilim"],
    },
    {
      id: "10",
      title: "Ölüm Korkusu",
      year: "1958",
      rating: "8.3",
      image: "/placeholder.svg?height=450&width=300",
      director: "Alfred Hitchcock",
      genre: ["Gizem", "Romantik", "Gerilim"],
    },
  ]

  const awardWinningFilms = [
    {
      id: "1",
      title: "Oppenheimer",
      year: "2023",
      rating: "8.5",
      image: "/placeholder.svg?height=450&width=300",
      director: "Christopher Nolan",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Yönetmen", "Oscar - En İyi Erkek Oyuncu"],
    },
    {
      id: "2",
      title: "Her Şey Her Yerde Aynı Anda",
      year: "2022",
      rating: "7.9",
      image: "/placeholder.svg?height=450&width=300",
      director: "Daniel Kwan, Daniel Scheinert",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Yönetmen", "Oscar - En İyi Kadın Oyuncu"],
    },
    {
      id: "3",
      title: "Parazit",
      year: "2019",
      rating: "8.5",
      image: "/placeholder.svg?height=450&width=300",
      director: "Bong Joon Ho",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Yönetmen", "Oscar - En İyi Uluslararası Film"],
    },
    {
      id: "4",
      title: "Nomadland",
      year: "2020",
      rating: "7.3",
      image: "/placeholder.svg?height=450&width=300",
      director: "Chloé Zhao",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Yönetmen", "Oscar - En İyi Kadın Oyuncu"],
    },
    {
      id: "5",
      title: "Moonlight",
      year: "2016",
      rating: "7.4",
      image: "/placeholder.svg?height=450&width=300",
      director: "Barry Jenkins",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Uyarlama Senaryo", "Oscar - En İyi Yardımcı Erkek Oyuncu"],
    },
    {
      id: "6",
      title: "Spotlight",
      year: "2015",
      rating: "8.1",
      image: "/placeholder.svg?height=450&width=300",
      director: "Tom McCarthy",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Özgün Senaryo"],
    },
    {
      id: "7",
      title: "Birdman",
      year: "2014",
      rating: "7.7",
      image: "/placeholder.svg?height=450&width=300",
      director: "Alejandro G. Iñárritu",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Yönetmen", "Oscar - En İyi Özgün Senaryo"],
    },
    {
      id: "8",
      title: "12 Yıllık Esaret",
      year: "2013",
      rating: "8.1",
      image: "/placeholder.svg?height=450&width=300",
      director: "Steve McQueen",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Uyarlama Senaryo", "Oscar - En İyi Yardımcı Kadın Oyuncu"],
    },
    {
      id: "9",
      title: "Argo",
      year: "2012",
      rating: "7.7",
      image: "/placeholder.svg?height=450&width=300",
      director: "Ben Affleck",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Uyarlama Senaryo", "Oscar - En İyi Kurgu"],
    },
    {
      id: "10",
      title: "The Artist",
      year: "2011",
      rating: "7.9",
      image: "/placeholder.svg?height=450&width=300",
      director: "Michel Hazanavicius",
      awards: ["Oscar - En İyi Film", "Oscar - En İyi Yönetmen", "Oscar - En İyi Erkek Oyuncu"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted/30 py-12">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-3xl font-bold mb-4">En İyi Filmler</h1>
              <p className="text-muted-foreground">
                Tüm zamanların en iyi filmlerini keşfedin. En yüksek puanlı, en popüler, klasik ve ödüllü filmler
                burada.
              </p>
            </div>

            <Tabs defaultValue="en-yuksek-puanli" className="w-full">
              <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4">
                <TabsTrigger value="en-yuksek-puanli">En Yüksek Puanlı</TabsTrigger>
                <TabsTrigger value="populer">En Popüler</TabsTrigger>
                <TabsTrigger value="klasikler">Klasikler</TabsTrigger>
                <TabsTrigger value="odullu">Ödüllü Filmler</TabsTrigger>
              </TabsList>

              <TabsContent value="en-yuksek-puanli" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {topRatedFilms.slice(0, 2).map((film, index) => (
                    <Card key={film.id} className="overflow-hidden">
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-4 p-4">
                        <div className="relative aspect-[2/3] overflow-hidden rounded-md">
                          <div className="absolute top-0 left-0 w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold rounded-tl-md rounded-br-md z-10">
                            {index + 1}
                          </div>
                          <Image
                            src={film.image || "/placeholder.svg"}
                            alt={film.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold">{film.title}</h3>
                          <div className="flex items-center gap-2 mt-1 mb-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <span className="ml-1 font-medium">{film.rating}</span>
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{film.year}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Yönetmen: <span className="text-foreground">{film.director}</span>
                          </p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {film.genre.map((g) => (
                              <Badge key={g} variant="outline">
                                {g}
                              </Badge>
                            ))}
                          </div>
                          <Button asChild className="mt-4 w-full sm:w-auto">
                            <Link href={`/film/${film.id}`}>Detayları Gör</Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {topRatedFilms.slice(2).map((film, index) => (
                    <div key={film.id} className="relative">
                      <div className="absolute top-0 left-0 w-6 h-6 bg-primary text-primary-foreground flex items-center justify-center font-bold rounded-tl-md rounded-br-md z-10">
                        {index + 3}
                      </div>
                      <FilmCard
                        id={film.id}
                        title={film.title}
                        year={film.year}
                        rating={film.rating}
                        image={film.image}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline">Daha Fazla Göster</Button>
                </div>
              </TabsContent>

              <TabsContent value="populer" className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {popularFilms.map((film) => (
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
                  <Button variant="outline">Daha Fazla Göster</Button>
                </div>
              </TabsContent>

              <TabsContent value="klasikler" className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {classicFilms.map((film) => (
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
                  <Button variant="outline">Daha Fazla Göster</Button>
                </div>
              </TabsContent>

              <TabsContent value="odullu" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {awardWinningFilms.slice(0, 6).map((film) => (
                    <Card key={film.id} className="overflow-hidden">
                      <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-4 p-4">
                        <div className="relative aspect-[2/3] overflow-hidden rounded-md">
                          <Image
                            src={film.image || "/placeholder.svg"}
                            alt={film.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold">{film.title}</h3>
                          <div className="flex items-center gap-2 mt-1 mb-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <span className="ml-1 font-medium">{film.rating}</span>
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{film.year}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Yönetmen: <span className="text-foreground">{film.director}</span>
                          </p>
                          <div className="mt-2">
                            <p className="text-sm font-medium mb-1">Ödüller:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {film.awards.map((award, index) => (
                                <li key={index}>• {award}</li>
                              ))}
                            </ul>
                          </div>
                          <Button asChild className="mt-4 w-full sm:w-auto">
                            <Link href={`/film/${film.id}`}>Detayları Gör</Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button variant="outline">Daha Fazla Göster</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Film Eleştirmenlerinin Seçimleri</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=800&text=Empire"
                    alt="Empire"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Empire Dergisi</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">1.</span>
                      <span>Esaretin Bedeli (1994)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">2.</span>
                      <span>Baba (1972)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">3.</span>
                      <span>Kara Şövalye (2008)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">4.</span>
                      <span>Yüzüklerin Efendisi: Kralın Dönüşü (2003)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">5.</span>
                      <span>Pulp Fiction (1994)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=800&text=Sight+and+Sound"
                    alt="Sight and Sound"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Sight and Sound</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">1.</span>
                      <span>Jeanne Dielman (1975)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">2.</span>
                      <span>Yurttaş Kane (1941)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">3.</span>
                      <span>Vertigo (1958)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">4.</span>
                      <span>2001: Uzay Macerası (1968)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">5.</span>
                      <span>Tokyo Hikayesi (1953)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=800&text=Roger+Ebert"
                    alt="Roger Ebert"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Roger Ebert</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">1.</span>
                      <span>La Dolce Vita (1960)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">2.</span>
                      <span>Raging Bull (1980)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">3.</span>
                      <span>Casablanca (1942)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">4.</span>
                      <span>Notorious (1946)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">5.</span>
                      <span>Sinema Cenneti (1988)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
