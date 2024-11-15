import book1 from '../assets/Book1.svg';
import bookbig1 from '../assets/Book3.svg';
import book2 from '../assets/Book2.svg';
import bookbig2 from '../assets/Book.svg';
import book3 from '../assets/New.svg';
import bookbig3 from '../assets/Book4.svg';
import book4 from '../assets/Book5.svg';
import bookbig4 from '../assets/Book6.svg';
import book5 from '../assets/Book7.svg';
import bookbig5 from '../assets/Book8.svg';
import book6 from '../assets/Book9.svg';
import bookbig6 from '../assets/Book10.svg';
import book7 from '../assets/Book11.svg';
import bookbig7 from '../assets/Book12.svg';
import book8 from '../assets/Book13.svg';
import bookbig8 from '../assets/Book14.svg';

export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    image: string;
    imagebig: string;
    category: 'bestsellers' | 'recommended';
    desc: string;
    publish: string;
    brand: string;
    series: string;
    year: number;
    pages: number;
    cover: string;
    edition: number;
    age: string;
}

export const booksData: Book[] = [
    {
        id: 1,
        title: 'Театр',
        author: 'Сомерсет Моэм',
        price: 343,
        image: book1,
        imagebig: bookbig1,
        category: 'bestsellers',
        desc: 'Самый знаменитый роман Сомерсета Моэма. Тонкая, едко-ироничная история блистательной, умной актрисы, отмечающей «кризис середины жизни» романом с красивым молодым «хищником»? «Ярмарка тщеславия» бурных двадцатых? Или - неподвластная времени увлекательнейшая книга, в которой каждый читатель находит что-то лично для себя? «Весь мир – театр, и люди в нем – актеры!» Так было – и так будет всегда!',
        publish: 'АСТ',
        brand: 'Neoclassic',
        series: 'Эксклюзивная классика',
        year: 2024,
        pages: 320,
        cover: 'Мягкий переплет',
        edition: 10000,
        age: '12+'
    },
    {
        id: 2,
        title: '11/22/63',
        author: 'Стивен Кинг',
        price: 450,
        image: book8,
        imagebig: bookbig8,
        category: 'recommended',
        desc: '...Убийство президента Кеннеди стало самым трагическим событием американской истории ХХ века. Тайна его до сих пор не раскрыта. Но что, если случится чудо? Если появится возможность отправиться в прошлое и предотвратить катастрофу? Это предстоит выяснить обычному учителю из маленького городка Джейку Эппингу, получившему доступ к временному порталу. Его цель — спасти Кеннеди. Но какова будет цена спасения?',
        publish: 'АСТ',
        brand: 'Neoclassic',
        series: 'Эксклюзивная классика',
        year: 2024,
        pages: 928,
        cover: 'Мягкий переплет',
        edition: 5500,
        age: '16+'
    },
    {
        id: 3,
        title: 'День триффидов',
        author: 'Джон Уиндем',
        price: 334,
        image: book3,
        imagebig: bookbig3,
        category: 'bestsellers',
        desc: '«Если день начинается воскресной тишиной, а вы точно знаете, что сегодня среда, значит, что-то неладно». Однажды, вечерней порой, жители Лондона с интересом наблюдали необычное явление – зеленый звездный дождь, озаривший все небо. Наутро свидетели загадочного явления проснулись слепыми, а вскоре стало ясно, что зрения лишилось почти все население Земли. В мире грядут большие перемены. Те немногие, кто сумел сохранить зрение, получают почти безграничную власть и доступ к накопленным человечеством ресурсам. Но беда, как известно, не приходит одна – и в действие вступает третья сила: триффиды, разумные хищные растения, способные передвигаться и охотиться на людей. Сложная система безопасности, созданная для сдерживания очень ценных, но чрезвычайно опасных растений, дает сбой, и триффиды вырываются на свободу…',
        publish: 'АСТ',
        brand: 'Neoclassic',
        series: 'Эксклюзивная классика',
        year: 2024,
        pages: 320,
        cover: 'Мягкий переплет',
        edition: 7000,
        age: '16+'
    },
    {
        id: 4,
        title: 'Солярис',
        author: 'Станислав Лем',
        price: 330,
        image: book4,
        imagebig: bookbig4,
        category: 'bestsellers',
        desc: '«Солярис» - бесспорная вершина творчества Станислава Лема, произведение, повлиявшее на развитие научной фантастики XX века, в том числе и на русскую фантастику. Роман дважды экранизирован, по нему были поставлены радиопьесы, спектакли – и даже балет! Итак, что же такое – Солярис? Бескрайний мыслящий океан, преследующий непонятные человеку цели, тончайший камертон, преобразующий людские чувства в материальную форму? Воплощенный кошмар психолога или духовный целитель? Со дня публикации книги прошло больше 50 лет, а ее читатели все так же продолжают задаваться вопросами, ответы на которые невозможно получить, не заглянув в свое собственное сердце.',
        publish: 'АСТ',
        brand: 'Neoclassic',
        series: 'Эксклюзивная классика',
        year: 2024,
        pages: 288,
        cover: 'Мягкий переплет',
        edition: 10000,
        age: '12+'
    },
    {
        id: 5,
        title: 'Три товарища',
        author: 'Эрих Мария Ремарк',
        price: 480,
        image: book5,
        imagebig: bookbig5,
        category: 'recommended',
        desc: 'Самый красивый в двадцатом столетии роман о любви... Самый увлекательный в двадцатом столетии роман о дружбе... Самый трагический и пронзительный роман о человеческих отношениях за всю историю двадцатого столетия.',
        publish: 'АСТ',
        brand: 'Neoclassic',
        series: 'Эксклюзивная классика',
        year: 2024,
        pages: 480,
        cover: 'Мягкий переплет',
        edition: 30000,
        age: '12+'
    },
    {
        id: 6,
        title: 'Унесенные ветром',
        author: 'Маргарет Митчелл',
        price: 370,
        image: book6,
        imagebig: bookbig6,
        category: 'recommended',
        desc: '«Унесенные ветром» – история о молодой южанке, дочери состоятельного владельца плантаций в Джорджии, чья беззаботная юность прекращается с началом Гражданской войны. В один миг девушке пришлось повзрослеть: мать умерла, отец болен, а родное поместье разграбили янки. Эта книга стала самой любимой для нескольких поколений женщин, и ничего равного ей не создано по сей день. Проходят годы и годы, а «Унесенные ветром» не стареют, и теперь уже новым читательницам предстоит смеяться и плакать, любить и страдать, бороться и надеяться вместе с великолепной Скарлетт О’Хара...',
        publish: 'АСТ',
        brand: 'Neoclassic',
        series: 'Эксклюзивная классика',
        year: 2024,
        pages: 704,
        cover: 'Мягкий переплет',
        edition: 7000,
        age: '16+'
    },
    {
        id: 7,
        title: 'Поющие в терновнике',
        author: 'Коллин Маккалоу',
        price: 380,
        image: book7,
        imagebig: bookbig7,
        category: 'recommended',
        desc: '«Поющие в терновнике». Любовный роман, поднятый на уровень настоящей лите­ратуры. Трогательная история взаимоотношений влюблен­ных, завораживающая читателя своей искренностью, чистотой и глубиной...',
        publish: 'АСТ',
        brand: 'Neoclassic',
        series: 'Эксклюзивная классика',
        year: 2024,
        pages: 640,
        cover: 'Мягкий переплет',
        edition: 12000,
        age: '16+'
    },
    {
        id: 8,
        title: 'Дама с камелиями',
        author: 'Александр Дюма',
        price: 243,
        image: book2,
        imagebig: bookbig2,
        category: 'bestsellers',
        desc: 'Нестареющий роман о великой любви и страшной трагедии. Сюжет романа явился основой для одноименной пьесы, которая впоследствии многократно экранизировалась и послужила либретто к гениальной опере Джузеппе Верди «Травиата». Роман о любви прекрасной, смертельно больной «королевы полусвета» и юного аристократа – любви страстной, трагической, заведомо обреченной – не уступает по драматизму «Травиате» и превосходит даже лучшие экранизации.',
        publish: 'АСТ',
        brand: 'Neoclassic',
        series: 'Эксклюзивная классика',
        year: 2024,
        pages: 320,
        cover: 'Мягкий переплет',
        edition: 4000,
        age: '16+'
    },
];