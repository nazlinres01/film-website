import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar, Film } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function YakindaPage() {
  // Yakında vizyona girecek filmler
  const upcomingFilms = [
    {
      id: "1",
      title: "Gladyatör 2",
      originalTitle: "Gladiator II",
      image: "/placeholder.svg?height=400&width=800",
      date: "22 Kasım 2024",
      description:
        "Ridley Scott'ın yönettiği efsanevi Gladyatör filminin devam filmi. Paul Mescal, Denzel Washington ve Pedro Pascal başrollerde yer alıyor.",
      director: "Ridley Scott",
      cast: ["Paul Mescal", "Denzel Washington", "Pedro Pascal", "Connie Nielsen"],
      genre: ["Aksiyon", "Macera", "Drama"],
      trailer: true,
    },
    {
      id: "2",
      title: "Joker: Folie à Deux",
      originalTitle: "Joker: Folie à Deux",
      image: "/placeholder.svg?height=400&width=800",
      date: "4 Ekim 2024",
      description:
        "Arthur Fleck'in hikayesinin devamı, bu sefer müzikal bir yapım olarak karşımıza çıkıyor. Joaquin Phoenix ve Lady Gaga başrollerde.",
      director: "Todd Phillips",
      cast: ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz", "Brendan Gleeson"],
      genre: ["Suç", "Drama", "Gerilim"],
      trailer: true,
    },
    {
      id: "3",
      title: "Dune: Çöl Gezegeni Bölüm 2",
      originalTitle: "Dune: Part Two",
      image: "/placeholder.svg?height=400&width=800",
      date: "15 Mart 2024",
      description:
        "Denis Villeneuve'ün yönettiği Dune serisinin ikinci filmi. Paul Atreides'in intikam yolculuğu ve Chani ile ilişkisi konu alınıyor.",
      director: "Denis Villeneuve",
      cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"],
      genre: ["Bilim Kurgu", "Macera", "Drama"],
      trailer: true,
    },
    {
      id: "4",
      title: "Deadpool & Wolverine",
      originalTitle: "Deadpool & Wolverine",
      image: "/placeholder.svg?height=400&width=800",
      date: "26 Temmuz 2024",
      description:
        "Marvel Sinematik Evreni'ne katılan Deadpool, bu sefer Wolverine ile birlikte maceraya atılıyor. Ryan Reynolds ve Hugh Jackman başrollerde.",
      director: "Shawn Levy",
      cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin", "Morena Baccarin"],
      genre: ["Aksiyon", "Komedi", "Bilim Kurgu"],
      trailer: true,
    },
    {
      id: "5",
      title: "Furiosa",
      originalTitle: "Furiosa: A Mad Max Saga",
      image: "/placeholder.svg?height=400&width=800",
      date: "24 Mayıs 2024",
      description:
        "Mad Max: Fury Road'un öncesini anlatan film, genç Furiosa'nın hikayesini konu alıyor. Anya Taylor-Joy ve Chris Hemsworth başrollerde.",
      director: "George Miller",
      cast: ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke", "Yahya Abdul-Mateen II"],
      genre: ["Aksiyon", "Macera", "Bilim Kurgu"],
      trailer: true,
    },
    {
      id: "6",
      title: "Venom 3",
      originalTitle: "Venom: The Last Dance",
      image: "/placeholder.svg?height=400&width=800",
      date: "25 Ekim 2024",
      description:
        "Venom serisinin üçüncü ve son filmi. Eddie Brock ve simbiyotu Venom'un son macerası. Tom Hardy yine başrolde.",
      director: "Kelly Marcel",
      cast: ["Tom Hardy", "Juno Temple", "Chiwetel Ejiofor", "Rhys Ifans"],
      genre: ["Aksiyon", "Bilim Kurgu", "Gerilim"],
      trailer: false,
    },
    {
      id: "7",
      title: "Alien: Romulus",
      originalTitle: "Alien: Romulus",
      image: "/placeholder.svg?height=400&width=800",
      date: "16 Ağustos 2024",
      description:
        "Alien serisinin yeni filmi, orijinal Alien ve Aliens filmleri arasında geçiyor. Genç bir grup, uzay istasyonunda korkunç bir yaratıkla karşılaşıyor.",
      director: "Fede Alvarez",
      cast: ["Cailee Spaeny", "David Jonsson", "Archie Renaux", "Isabela Merced"],
      genre: ["Korku", "Bilim Kurgu", "Gerilim"],
      trailer: true,
    },
    {
      id: "8",
      title: "Twisters",
      originalTitle: "Twisters",
      image: "/placeholder.svg?height=400&width=800",
      date: "19 Temmuz 2024",
      description:
        "1996 yapımı Twister'ın devam filmi. Kasırgaları araştıran bilim insanlarının hikayesini konu alıyor.",
      director: "Lee Isaac Chung",
      cast: ["Daisy Edgar-Jones", "Glen Powell", "Anthony Ramos", "Brandon Perea"],
      genre: ["Aksiyon", "Macera", "Dram"],
      trailer: false,
    },
    {
      id: "9",
      title: "Kraven Avcı",
      originalTitle: "Kraven the Hunter",
      image: "/placeholder.svg?height=400&width=800",
      date: "13 Aralık 2024",
      description:
        "Marvel'ın Spider-Man evreninden Kraven karakterinin solo filmi. Rus göçmeni Sergei Kravinoff'un Kraven the Hunter'a dönüşme hikayesi.",
      director: "J.C. Chandor",
      cast: ["Aaron Taylor-Johnson", "Russell Crowe", "Ariana DeBose", "Fred Hechinger"],
      genre: ["Aksiyon", "Macera", "Bilim Kurgu"],
      trailer: false,
    },
    {
      id: "10",
      title: "Mufasa: Aslan Kral",
      originalTitle: "Mufasa: The Lion King",
      image: "/placeholder.svg?height=400&width=800",
      date: "20 Aralık 2024",
      description:
        "Aslan Kral'ın öncesini anlatan film, genç Mufasa'nın hikayesini ve Scar ile ilişkisini konu alıyor.",
      director: "Barry Jenkins",
      cast: ["Aaron Pierre", "Kelvin Harrison Jr.", "Seth Rogen", "Billy Eichner"],
      genre: ["Animasyon", "Macera", "Drama"],
      trailer: false,
    },
    {
      id: "11",
      title: "Thunderbolts",
      originalTitle: "Thunderbolts*",
      image: "/placeholder.svg?height=400&width=800",
      date: "2 Mayıs 2025",
      description:
        "Marvel Sinematik Evreni'nin yeni filmi, bir grup anti-kahramanın bir araya gelerek bir takım oluşturmasını konu alıyor.",
      director: "Jake Schreier",
      cast: ["Florence Pugh", "Sebastian Stan", "David Harbour", "Wyatt Russell"],
      genre: ["Aksiyon", "Macera", "Bilim Kurgu"],
      trailer: false,
    },
    {
      id: "12",
      title: "Avatar 3",
      originalTitle: "Avatar 3",
      image: "/placeholder.svg?height=400&width=800",
      date: "19 Aralık 2025",
      description: "James Cameron'ın Avatar serisinin üçüncü filmi. Pandora gezegenindeki macera devam ediyor.",
      director: "James Cameron",
      cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],
      genre: ["Aksiyon", "Macera", "Bilim Kurgu"],
      trailer: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted/30 py-12">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-3xl font-bold mb-4">Yakında Vizyona Girecek Filmler</h1>
              <p className="text-muted-foreground">
                Merakla beklenen yeni filmleri keşfedin ve vizyona girmeden önce haberdar olun.
              </p>
            </div>

            <Tabs defaultValue="tum-filmler" className="w-full">
              <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3">
                <TabsTrigger value="tum-filmler">Tüm Filmler</TabsTrigger>
                <TabsTrigger value="bu-ay">Bu Ay</TabsTrigger>
                <TabsTrigger value="fragmanli">Fragmanlı</TabsTrigger>
              </TabsList>

              <TabsContent value="tum-filmler" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingFilms.map((film) => (
                    <Card key={film.id} className="overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <Image src={film.image || "/placeholder.svg"} alt={film.title} fill className="object-cover" />
                        {film.trailer && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button
                              size="icon"
                              className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                            >
                              <Film className="h-5 w-5" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-2">
                          {film.date}
                        </Badge>
                        <CardTitle className="mb-2">{film.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{film.description}</CardDescription>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {film.genre.map((g) => (
                            <Badge key={g} variant="secondary">
                              {g}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" className="gap-2">
                          <Bell className="h-4 w-4" />
                          Hatırlat
                        </Button>
                        <Button asChild>
                          <Link href={`/film/${film.id}`}>Detaylar</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="bu-ay" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingFilms.slice(0, 6).map((film) => (
                    <Card key={film.id} className="overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <Image src={film.image || "/placeholder.svg"} alt={film.title} fill className="object-cover" />
                        {film.trailer && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button
                              size="icon"
                              className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                            >
                              <Film className="h-5 w-5" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-2">
                          {film.date}
                        </Badge>
                        <CardTitle className="mb-2">{film.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{film.description}</CardDescription>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {film.genre.map((g) => (
                            <Badge key={g} variant="secondary">
                              {g}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" className="gap-2">
                          <Bell className="h-4 w-4" />
                          Hatırlat
                        </Button>
                        <Button asChild>
                          <Link href={`/film/${film.id}`}>Detaylar</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fragmanli" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingFilms
                    .filter((film) => film.trailer)
                    .map((film) => (
                      <Card key={film.id} className="overflow-hidden">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={film.image || "/placeholder.svg"}
                            alt={film.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button
                              size="icon"
                              className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                            >
                              <Film className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <Badge variant="outline" className="mb-2">
                            {film.date}
                          </Badge>
                          <CardTitle className="mb-2">{film.title}</CardTitle>
                          <CardDescription className="line-clamp-3">{film.description}</CardDescription>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {film.genre.map((g) => (
                              <Badge key={g} variant="secondary">
                                {g}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" className="gap-2">
                            <Bell className="h-4 w-4" />
                            Hatırlat
                          </Button>
                          <Button asChild>
                            <Link href={`/film/${film.id}`}>Detaylar</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Vizyona Giriş Takvimi</h2>

            <div className="space-y-8">
              {[
                { month: "Mayıs 2024", films: upcomingFilms.slice(4, 6) },
                { month: "Temmuz 2024", films: upcomingFilms.slice(3, 5) },
                { month: "Ağustos 2024", films: upcomingFilms.slice(6, 8) },
                { month: "Ekim 2024", films: upcomingFilms.slice(1, 3) },
                { month: "Kasım 2024", films: upcomingFilms.slice(0, 2) },
                { month: "Aralık 2024", films: upcomingFilms.slice(8, 10) },
              ].map((monthData) => (
                <div key={monthData.month}>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {monthData.month}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {monthData.films.map((film) => (
                      <Card key={film.id} className="overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative w-full sm:w-1/3 aspect-video sm:aspect-[3/4]">
                            <Image
                              src={film.image || "/placeholder.svg"}
                              alt={film.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4 flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{film.date}</Badge>
                              {film.trailer && (
                                <Badge variant="secondary" className="gap-1">
                                  <Film className="h-3 w-3" />
                                  Fragman
                                </Badge>
                              )}
                            </div>
                            <h4 className="font-bold mb-1">{film.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{film.description}</p>
                            <div className="text-sm space-y-1">
                              <div className="flex items-start gap-2">
                                <span className="font-medium min-w-20">Yönetmen:</span>
                                <span>{film.director}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="font-medium min-w-20">Oyuncular:</span>
                                <span className="line-clamp-1">{film.cast.join(", ")}</span>
                              </div>
                              <div className="flex items-center gap-2 mt-2">
                                <Button variant="outline" size="sm" className="gap-1">
                                  <Bell className="h-3 w-3" />
                                  Hatırlat
                                </Button>
                                <Button size="sm" asChild>
                                  <Link href={`/film/${film.id}`}>Detaylar</Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Merakla Beklenen Filmler</h2>

            <div className="grid grid-cols-1 gap-8">
              {upcomingFilms.slice(0, 3).map((film) => (
                <Card key={film.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-video md:aspect-auto">
                      <Image src={film.image || "/placeholder.svg"} alt={film.title} fill className="object-cover" />
                      {film.trailer && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button
                            size="icon"
                            className="rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                          >
                            <Film className="h-5 w-5" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="gap-1">
                          <Calendar className="h-3 w-3" />
                          {film.date}
                        </Badge>
                        {film.trailer && (
                          <Badge variant="secondary" className="gap-1">
                            <Film className="h-3 w-3" />
                            Fragman
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{film.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {film.originalTitle !== film.title && `${film.originalTitle} • `}
                        {film.genre.join(", ")}
                      </p>
                      <p className="text-muted-foreground my-4">{film.description}</p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-start gap-2">
                          <span className="font-medium min-w-20">Yönetmen:</span>
                          <span>{film.director}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-medium min-w-20">Oyuncular:</span>
                          <span>{film.cast.join(", ")}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <Button variant="outline" className="gap-2">
                          <Bell className="h-4 w-4" />
                          Hatırlat
                        </Button>
                        <Button asChild>
                          <Link href={`/film/${film.id}`}>Detaylar</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="rounded-xl overflow-hidden bg-muted/30 border">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Yeni Film Duyurularından Haberdar Olun</h2>
                  <p className="text-muted-foreground mb-6">
                    Yaklaşan filmler, fragmanlar ve vizyona giriş tarihleri hakkında bildirimler almak için bültenimize
                    abone olun.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="E-posta adresiniz"
                      className="px-3 py-2 border rounded-md flex-1"
                    />
                    <Button>Abone Ol</Button>
                  </div>
                </div>
                <div className="relative min-h-[300px]">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Film+Duyuruları"
                    alt="Film Duyuruları"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
