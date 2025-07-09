import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const privileges = [
    {
      id: 1,
      name: "VIP",
      price: "199₽",
      description: "Базовые привилегии для комфортной игры",
      features: ["Цветной ник", "Приватный чат", "Дополнительные слоты"],
      color: "bg-green-500",
    },
    {
      id: 2,
      name: "PREMIUM",
      price: "499₽",
      description: "Расширенные возможности и бонусы",
      features: [
        "Все VIP привилегии",
        "Fly на спавне",
        "Личный варп",
        "Эксклюзивные предметы",
      ],
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "ELITE",
      price: "999₽",
      description: "Максимальные привилегии для настоящих ценителей",
      features: [
        "Все PREMIUM привилегии",
        "Креатив в личном мире",
        "Админ-команды",
        "Приоритет входа",
      ],
      color: "bg-purple-500",
    },
  ];

  const stats = [
    { label: "Онлайн игроков", value: "147", icon: "Users" },
    { label: "Максимальный онлайн", value: "200", icon: "TrendingUp" },
    { label: "Всего игроков", value: "15,230", icon: "UserCheck" },
    { label: "Время работы", value: "99.8%", icon: "Clock" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/img/825ce551-d343-4044-b80c-8b70df81915f.jpg"
                alt="Server"
                className="w-10 h-10 rounded-lg"
              />
              <h1 className="text-2xl font-bold text-white">VanillaCraft</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#privileges"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                Привилегии
              </a>
              <a
                href="#stats"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                Статистика
              </a>
              <a
                href="#support"
                className="text-slate-300 hover:text-primary transition-colors"
              >
                Поддержка
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ванильный <span className="text-primary">Minecraft</span>
              <br />
              <span className="text-secondary">Сервер</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Присоединяйся к нашему дружному сообществу! Классический Minecraft
              опыт без модов, только ванильный геймплей с возможностью
              поддержать сервер.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-sm">IP сервера:</span>
                <div className="text-primary font-mono text-lg">
                  play.vanillacraft.ru
                </div>
              </div>
              <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-sm">Версия:</span>
                <div className="text-white font-semibold text-lg">1.20.1</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать лаунчер
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Privileges Section */}
      <section id="privileges" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Каталог привилегий
            </h2>
            <p className="text-xl text-slate-300">
              Поддержи сервер и получи крутые возможности!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {privileges.map((privilege) => (
              <Card
                key={privilege.id}
                className="bg-slate-900/50 border-slate-700 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${privilege.color} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Icon name="Crown" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    {privilege.name}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {privilege.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-primary mt-2">
                    {privilege.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {privilege.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-slate-300"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-2 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 mt-6">
                    Купить привилегию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Статистика сервера
            </h2>
            <p className="text-xl text-slate-300">
              Актуальная информация о состоянии сервера
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700 text-center"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Загрузка сервера
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                      <span>CPU</span>
                      <span>23%</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                      <span>RAM</span>
                      <span>67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                      <span>Сеть</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Нужна поддержка?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Наша команда всегда готова помочь! Свяжитесь с нами любым удобным
              способом.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="pt-6 text-center">
                  <Icon
                    name="MessageSquare"
                    size={32}
                    className="text-primary mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Discord
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Общайся с игроками и администрацией
                  </p>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800"
                  >
                    Присоединиться
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="pt-6 text-center">
                  <Icon
                    name="Send"
                    size={32}
                    className="text-primary mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Telegram
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Быстрая техническая поддержка
                  </p>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800"
                  >
                    Написать
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="pt-6 text-center">
                  <Icon
                    name="Mail"
                    size={32}
                    className="text-primary mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Подробные вопросы и предложения
                  </p>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800"
                  >
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="/img/825ce551-d343-4044-b80c-8b70df81915f.jpg"
              alt="Server"
              className="w-8 h-8 rounded"
            />
            <span className="text-xl font-bold text-white">VanillaCraft</span>
          </div>
          <p className="text-slate-400">
            © 2024 VanillaCraft. Лучший ванильный Minecraft сервер для истинных
            ценителей игры.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
