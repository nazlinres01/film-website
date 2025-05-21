import Image from "next/image"
import { Calendar, Clock, Film, Heart, Share2, Star, ThumbsUp, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function FilmDetayPage({ params }: { params: { id: string } }) {
  // Bu sayfada film ID'sine göre detayları göstereceğiz
  // Gerçek uygulamada bu ID ile API'den film bilgilerini çekebilirsiniz

  return (
    <div className="min-h-screen">
      {/* Film Arkaplan ve Detaylar */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background" />
        <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Film arkaplanı"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative -mt-40 md:-mt-60 z-10 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
            <div className="hidden md:block">
              <div className="sticky top-20">
                <div className="relative aspect-[2/3] overflow-hidden rounded-md shadow-xl">
                  <Image src="/placeholder.svg?height=450&width=300" alt="Film posteri" fill className="object-cover" />
                </div>
                <div className="mt-6 space-y-4">
                  <Button className="w-full gap-2">
                    <Film className="h-4 w-4" />
                    Şimdi İzle
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Heart className="h-4 w-4" />
                    Favorilere Ekle
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Share2 className="h-4 w-4" />
                    Paylaş
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
                <div className="md:hidden relative aspect-[2/3] w-40 overflow-hidden rounded-md shadow-xl">
                  <Image src="/placeholder.svg?height=450&width=300" alt="Film posteri" fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge>Aksiyon</Badge>
                    <Badge>Bilim Kurgu</Badge>
                    <Badge>Macera</Badge>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">Dune: Çöl Gezegeni</h1>
                  <p className="text-xl text-muted-foreground mb-4">Dune: Part One (2021)</p>

                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <div>
                        <span className="font-bold">8.5</span>
                        <span className="text-muted-foreground">/10</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>155 dakika</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>22 Ekim 2021</span>
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex gap-2 mt-4">
                  <Button className="flex-1 gap-2">
                    <Film className="h-4 w-4" />
                    İzle
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="overview" className="mt-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
                  <TabsTrigger value="cast">Oyuncular</TabsTrigger>
                  <TabsTrigger value="reviews">Yorumlar</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6 space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Özet</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Uzak bir gelecekte geçen destansı bir macera, ailesinin kontrolündeki çöl gezegeni Arrakis'i
                      korumak için savaşan Paul Atreides'in hikayesini anlatıyor. Arrakis, evrende en değerli madde olan
                      ve insanların uzay yolculuğu yapabilmesini, zihinsel yeteneklerini genişletebilmesini ve yaşam
                      sürelerini uzatabilmesini sağlayan "baharat"ın tek kaynağıdır. Galaksideki güçler, Arrakis'in
                      kontrolü için savaşırken, Paul, ailesinin ve gezegenin geleceğini korumak için zorlu bir yolculuğa
                      çıkar.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Detaylar</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Yönetmen</p>
                        <p className="font-medium">Denis Villeneuve</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Bütçe</p>
                        <p className="font-medium">$165,000,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Hasılat</p>
                        <p className="font-medium">$402,027,830</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Orijinal Dil</p>
                        <p className="font-medium">İngilizce</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Yapım Şirketi</p>
                        <p className="font-medium">Legendary Pictures</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Ülke</p>
                        <p className="font-medium">ABD</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Fragmanlar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                        <Image
                          src="/placeholder.svg?height=720&width=1280&text=Fragman+1"
                          alt="Fragman 1"
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
                      <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                        <Image
                          src="/placeholder.svg?height=720&width=1280&text=Fragman+2"
                          alt="Fragman 2"
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
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Benzer Filmler</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {["Blade Runner 2049", "Arrival", "Interstellar", "The Martian", "Mad Max: Fury Road"].map(
                        (title, index) => (
                          <Card key={index} className="overflow-hidden border-0 bg-muted/40">
                            <div className="relative aspect-[2/3] overflow-hidden rounded-t-md">
                              <Image
                                src={`/placeholder.svg?height=450&width=300&text=${index + 1}`}
                                alt={title}
                                fill
                                className="object-cover transition-transform hover:scale-105"
                              />
                            </div>
                            <CardContent className="p-3">
                              <CardTitle className="line-clamp-1 text-sm">{title}</CardTitle>
                            </CardContent>
                          </Card>
                        ),
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="cast" className="mt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[
                      { name: "Timothée Chalamet", role: "Paul Atreides" },
                      { name: "Rebecca Ferguson", role: "Lady Jessica" },
                      { name: "Oscar Isaac", role: "Duke Leto Atreides" },
                      { name: "Josh Brolin", role: "Gurney Halleck" },
                      { name: "Stellan Skarsgård", role: "Baron Vladimir Harkonnen" },
                      { name: "Zendaya", role: "Chani" },
                      { name: "Jason Momoa", role: "Duncan Idaho" },
                      { name: "Javier Bardem", role: "Stilgar" },
                      { name: "Dave Bautista", role: "Glossu Rabban" },
                      { name: "David Dastmalchian", role: "Piter De Vries" },
                    ].map((actor, index) => (
                      <Card key={index} className="overflow-hidden border-0 bg-muted/40">
                        <div className="relative aspect-square overflow-hidden rounded-t-md">
                          <Image
                            src={`/placeholder.svg?height=300&width=300&text=${index + 1}`}
                            alt={actor.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-3">
                          <CardTitle className="line-clamp-1 text-sm">{actor.name}</CardTitle>
                          <CardDescription className="line-clamp-1">{actor.role}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6 space-y-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 bg-muted/40 rounded-lg p-6 text-center">
                      <div className="text-5xl font-bold mb-2">8.5</div>
                      <div className="flex justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${star <= 4 ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-6">1,248 kullanıcı puanı</p>
                      <Button className="w-full">Puan Ver</Button>
                    </div>

                    <div className="md:w-2/3 space-y-4">
                      <h3 className="text-lg font-semibold">Puan Dağılımı</h3>
                      {[
                        { stars: 5, percentage: 65, count: 812 },
                        { stars: 4, percentage: 20, count: 250 },
                        { stars: 3, percentage: 10, count: 125 },
                        { stars: 2, percentage: 3, count: 37 },
                        { stars: 1, percentage: 2, count: 24 },
                      ].map((rating) => (
                        <div key={rating.stars} className="flex items-center gap-4">
                          <div className="flex items-center gap-1 w-20">
                            <span>{rating.stars}</span>
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          </div>
                          <Progress value={rating.percentage} className="h-2 flex-1" />
                          <div className="w-16 text-sm text-muted-foreground text-right">{rating.count}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">Kullanıcı Yorumları</h3>
                      <Button>Yorum Yaz</Button>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          name: "Ahmet Yılmaz",
                          date: "15 Mart 2024",
                          rating: 5,
                          comment:
                            "Denis Villeneuve'ün yönetmenliğindeki bu film, Frank Herbert'ın klasik romanını muhteşem bir şekilde beyaz perdeye aktarıyor. Görsel efektler, müzik ve oyunculuklar olağanüstü. Özellikle Timothée Chalamet, Paul Atreides rolünde harika bir performans sergiliyor.",
                        },
                        {
                          name: "Zeynep Kaya",
                          date: "10 Mart 2024",
                          rating: 4,
                          comment:
                            "Dune, bilim kurgu severlerin kaçırmaması gereken bir yapım. Hikaye biraz yavaş ilerliyor ve bazı kısımlar kitabı okumamış izleyiciler için karmaşık olabilir, ancak görsel şölen ve atmosfer bu küçük eksiklikleri telafi ediyor.",
                        },
                        {
                          name: "Mehmet Demir",
                          date: "5 Mart 2024",
                          rating: 5,
                          comment:
                            "Sinematografi ve ses tasarımı açısından son yılların en etkileyici filmlerinden biri. Hans Zimmer'ın müzikleri filmin atmosferini mükemmel bir şekilde tamamlıyor. İkinci filmi sabırsızlıkla bekliyorum!",
                        },
                      ].map((review, index) => (
                        <div key={index} className="border-b pb-6 last:border-0">
                          <div className="flex items-start gap-4">
                            <div className="bg-muted rounded-full p-2">
                              <User className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h4 className="font-medium">{review.name}</h4>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                                <div className="flex items-center gap-1 ml-auto">
                                  <span className="font-medium">{review.rating}.0</span>
                                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                </div>
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                              <div className="flex items-center gap-6 mt-4">
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>Yararlı</span>
                                </Button>
                                <Button variant="ghost" size="sm">
                                  Yanıtla
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center mt-8">
                      <Button variant="outline">Daha Fazla Yorum Yükle</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
