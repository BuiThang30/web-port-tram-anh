export type Layout = 'left' | 'right' | 'top' | 'bottom';
export type Slide = { title: string; layout: Layout; poem?: string; poem2?: string; wide?: boolean; imgH?: number };
export type Sub = { key: string; label: string; left: number; top: number; slides: Slide[] };

const TONG_DAN = `Upon the canvas of the past -
where ancient, mystic spells are cast,
the Daoist Altar stands revealed–
a cosmic order. Signed and sealed

beneath the swirling, clouded sky,
three supreme sages sit on high.
Their halos glow with tranquil grace
that commands all of time. In space

of tiered battalions, row by row,
where heaven’s painted armies glow,
with feathered crowns and weapons bright,
they shield the tribe through darkest night.

Below, where earthly shadows fall,
the broad-brimmed shaman leads the call.
Through Cap Sac rites that bless the youth,
he chants the sacred, timeless truth.

With dragon, goat, and guardian steed,
the spirits answer every need.
More than a scroll, this holy key
binds who they are to what will be.`;

const THAI_UY = `On ancient paper scroll,
hand-drawn with spirit's soul and grace,
Thai Uy now takes his place
to guard the village space. So fine

in gold-trimmed robes of  line,
he mounts a beast where twine bold scales -
raised sword o'er hills and vales,
a seal that still prevails in gloom.

Bright cloud rings softly bloom
like halos. In the room around,
two guardians on the ground,
on armored horses, bound to fight.

Smaller in scale and height,
they serve the Marshal's might with pride.
When shamans stand beside
the altar - where they guide the soul

to make the spirit whole,
Cap Sac ordains their role. A name,
a spark of sacred flame,
now shields the clan from shame and dread.

In tones of ochre red,
on 'do' bark paper spread of old,
a story proudly told
still binds the tribe to hold its soul.`;

// layout 'top': thơ tự chia 2 cột (CSS columns)
const TAU_KHANG = `Behold the Tau Khang art,
on Do paper with heart, they gleam.
The gods awake from dream,
to cross a mystic stream of light.

For Cap Sac rites so bright,
the priest unveils the sight in red;
with earthly colors spread,
along the spirit thread, they flow.

Through patient care they grow;
with gold and crimson glow, they shine.
Bound in the bold design,
three worlds of truth align, unseen

yet felt. In deepest green,
the ancestors convene today.

to guide the Dao's own way;
as mountain echoes, play and blend,

the past and present mend,
A sacred bond to tend as one
under the mountain sun,
the painter's work is done at last.

A bridge to reach the past,
By ancient shadows cast so deep.
The mystic secrets keep,
for every soul to reap the grace.

In this eternal place,
the Tau Khang leaves a trace of peace -
a faith that will not cease,
a glorious release divine.`;

const HOI_FAN = `Pressed leaves and ink, by forest hands,
A bridge to where the spirit stands.
Through incense, brush, and paper's grain,
The Dao calls heaven down again.

Hoi Fan, the Lord of Deep, awakes,
In ochre fire his fury breaks.
He lifts the horn, he grips the blade,
On dragon coils of water made.

Beneath the storm, three priests in red
They honor living, guide the dead;
Hands folded at the altar's flame,
They offer gifts in heaven's name.

The cymbals ring, the chants arise,
The shaman opens painted eyes;
The ink draws breath, the vapor sways,
And sacred presence fills the haze.

In Cap Sac rites, when men ascend,
It stands as guardian, teacher, friend,
And grounds a people's old belief
Through harvest joy and winter grief.

For culture never fades to dark,
It waits for those who keep the spark.`;

const GREAT_RITUAL_BRIDGE = `Lost in the mountains high,
they painted ancient sky and land
with pigment. Bold and grand,
the Great Tang Bridge will stand, anew.

In shades shadows blue,
The paper shines so true and bright.
Welcome the souls in flight,
leading the spirit night. we pray:

the nature's colors stay,
pressed in the bark. And day brings gold,
the gods of heaven hold.
The Three Pure Ones unfold their grace.

within the sacred space,
the youth steps to his place, as man.
Just as the gods began,
the Cap Sac echoes span the mind,

leaving the dark behind.
The ancestors will bind the soul,
and make the village whole,
before this holy scroll, in song.

The ancient bonds are strong,
a bridge where we belong. To guide
the spirits by our side,
with deep and mighty pride, they weave

for all who will believe.
The blessings we receive above
spill from the realms of love.
As peaceful as a dove, they glow

and let the spirits show.
This vision starts to grow, to shine
In every color's line.
The earth and heaven twine, up high!`;

const TAM_TOA = `Three sovereign Mothers in vibrant array,
Painted in pigments that never decay.
Red for the Heavens, where thunder is born,
Green for the Forests, which mountains adorn.
White for the Waters, the rivers that flow,
Crowned with bright halos of golden-spun glow.
They carry curled fans holding breath of the land,
While four loyal maidens bring gifts in their hand.

A canvas of worship, a portal of grace,
Connecting the divine to our physical space.
Mother Goddess, the ancient, matriarchal way,
Where sweet incense burns as the villagers pray.
They grant us the harvest, they guide the spring rain,
A motherly shield from our pain.
Through primary colors, so bold and so bright,
They turn earthly shadows to spiritual light.

The mediums dance as the ritual drums beat,
In echoing shrines where the two worlds meet.
In the vibrant strokes of three Thanh, we see,
The soul of a culture, deep-rooted and free.
It’s more than an artwork hung high on the wall,
It’s unity, heritage, answering the call.
Through sky, wood, and water, their spirits remain,
To nurture the people, again and again.`;

const ONG_LOT_1 = `The jade and silver scales,
Unfurl behind the veils of red,
Where water spirits tread,
By ancient altars shed their fears.

To wash away our tears,
The deities' twin spheres unfold.
A mystic legend told,
The shaman's sacred gold shines clear.

Protecting us from fear,
The faithful gather near to pray.
A blessing for the day,
To sweep the dark away with rain.

A cure for human pain,
The majestic snake twain arises.
With fierce, unblinking eyes,
They guard the shaman's prize of jade.`;

const ONG_LOT_2 = `On sapphire rocks arrayed,
The Water Mother's trade complete.
Above the mountain seat,
The sun and crimson meet in grace.

They guard the human race,
And blessed is the space for all.
Whenever ones may call,
They break the heavy wall of wrong.

Wherever ones belong,
Ong Lot forever strong remains.
Through joy and earthly pains,
The Water Mother reigns supreme.

Within the folklore dream,
Their bright and holy gleam will shine.
A heritage divine,
In Ong Lot's sacred shrine we trust.`;

const HOANG_CUOI_1 = `Beneath the roof where incenses twine,
A vision hangs, a sacred sign.
On paper old, with lines so bold,
A story of a Prince is told.
No simple brush, but human hand,
Drew power from the spirit land,
With colors raw, not of this earth,
To give a mighty guardian birth.

A central figure, noble, calm,
Holds justice like a silent balm.
His robe, a blaze of vermilion, blue,
Tells tales of heroes, brave and true,
Woven with scales and ancient script,
A history and a legend crypt.
A sword, to sever earthly ties,
A fly whisk, where all chaos dies.
Before him, two in service stand,
One holds a box with careful hand,
A vessel for the King’s decree,
A mandate for the lands to be.

He rides a storm, a primal grace,
Not horse, but Loy, a dragon’s trace.
Three heads it rears, with watchful eye,
A hydra of the sea and sky.
Green, yellow, red, its scales unfold,
In coiled patterns, strong and old.
The waves beneath, in tiered design,
Show realms of water, where he’d shine.
A Phúc Thần, from the Mother’s core,
He guards the family, protects the shore.`;

const HOANG_CUOI_2 = `For in this paints, folk-art fine,
A common soul does recline.
A national hero, now a saint,
No simple painting, no mere constraint.
Through rituals where the mediums dance,
He comes alive, to take his chance,
To bless the land, to clear the path,
To keep away the spirits’ wrath.
This art, a bridge, for human prayer,
A sentinel in sacred air.`;

const NGU_VI_1 = `Upon the scroll of age-old wood,
Where sacred smoke and spirit stood,
Five holy lords in stillness reign,
To guard the realm from harm and pain.

Beneath the canopy of pink and green,
Their court abides, severe, serene.
Bright amber halos bloom behind,
Reflecting wisdom unconfined.
In winged black caps of courtly grace,
With quiet power on each face,
They hold jade batons pressed on high,
Beneath the altar’s painted sky.

Five vibrant robes of cosmic thread–
The crimson fire where heavens spread,
The forest green of mountain crest,
The indigo on ocean’s breast,
The golden earth, the ivory white,
That bind the realms in sacred light.
Embroidered swirls like rolling cloud
Enfold each guardian, stern and proud.

In Mother Mẫu’s celestial hall,
They answer every mortal call.
Each Great Lord governs shore and sea,
To keep the village safe and free,
Dispelling ghosts, bestowing grace,
And bringing justice to the place.`;

const NGU_VI_2 = `From temple walls to family space,
Where incense curls in soft embrace,
The painting sits at ritual’s core,
An open, consecrated door.
When bronze bells chime and chants unfold,
And trance-dancers wear silk and gold,
This artwork grounds the community’s prayer,
Reminding all that gods are there.

More than pigment bound on sheet,
Where ancestral roots and mortals meet,
It weaves the folk-soul, deep and bright,
A testament to sacred light.`;

const NGU_HO_1 = `On ancient paper, smooth and white,
Born from the woodblock’s stroke of light,
Five sacred guardians awaken bold,
In shades of crimson, jade, and gold.

At center sits the Sovereign Lord,
The Yellow Tiger, fierce, adored,
For Earth’s own strength surrounds his throne,
A power timeless and unknown.

The White Beast leaps through Western skies,
Where Metal’s sharpest spirit lies;
The Black holds North like midnight’s deep,
While Eastern Green wakes Wood from sleep;
The Red burns South in fiery glaze–
Five elements within the blaze.`;

const NGU_HO_2 = `Behind their backs, five banners stream,
Five sacred blades like lightning gleam.
Beneath seven stars and a sun of red,
Where swirling clouds of glory spread,
Their claw-poised paws and glowing eyes
Command the earth and rule the skies.

Resting beneath the Mother’s shrine,
At Ha Ban’s altar, dark, divine,
They banish harm and drive away
The phantom shades that stalk the day.

For folk who bow in sacred space,
This art bestows a holy grace–
A shield of faith, a heritage grand,
To keep true peace across the land.`;

const CONG_DONG_1 = `A sacred cosmos bathed in light,
Tier upon tier, on paper and glass,
Where earthly prayers and divinity pass.
Golden halos bloom like morning suns,
Guiding the steps of faithful ones.

Red for the Sky, supreme and high,
Green for the Forests, where tall pines sigh,
White for the Waters, where pure streams flow,
Yellow for Earth, where rich harvests grow.
Four Holy Palaces in colors aligned,
Blessing the heart, the spirit, and mind.

High sits the Father, the King of the Air,
Encircled by court spirits standing in care.
The Holy Mothers, serene in their grace,
Enfold every soul in a Mother’s embrace.
Great Mandarins in court attire stand tall,
Noble Court Ladies answering the call.
Holy Princes and Maidens with fans in their hand,
While Five Sacred Tigers guard the holy land.`;

const CONG_DONG_2 = `When lute strings ring and bronze bells chime,
Chau Van melodies transcend through time.
In the warmth of the shrine, in silk robes reborn,
The spirit descends, and new hopes are worn.
Through trance and through dance, in ritual divine,
The village unites round the sanctuary shrine.

More than fine pigment, far more than folk art,
This sacred icon lives deep in the heart.
Honoring heroes, protecting our roots,
Bringing good health, peace, and sweet fruits.
A timeless refuge, a legacy grand–
The Mother Goddess watching over our land!`;

/* ===== Hang Trong Worship Paintings ===== */
const HT_SAMANTA = `A sun around the head,
In vivid wash of red and green,
The Hang Trong altar scene,
A yellow mount serene and bright,

Beneath the clouded height,
He holds a scripture tight in hand,
He sits upon the land,
A scepter raised to stand for good,

Carved deep within the wood,
To bring the neighborhood its grace,
Reflected on his face,
The shading techniques trace the heart,

Where ancient visions start,
The graded pigments chart the known,
With wisdom fully grown,
Protecting flesh and bone this year.

When festivals draw near,
The incense smoke will clear the mind.
A treasure left behind,
The paper crafts will bind us all.`;

const HT_MISTRESS_1 = `A rosy red-framed space,
The Mother shows her face of light.
Her garments gleam in white,
Dark trousers catch the sight below.

A red sash brings a glow,
A turban like the snow rests high.
A dark fan meets the eye,
With golden curves that lie so still.

The artist shapes with skill,
Green curtains softly fill the art.
She hears the farmer's heart,
While fruits become a part displayed.

Bright colors never fade,
With spirals boldly made in red.
Two slippers rest ahead,
Upon the clouds they tread so free.

A mother to the sea,
She brings the harvest glee and grain.
Controlling flood and rain,
She guards the watered plain around.

When drum and cymbal sound,
The spirits walk the ground once more.
Her people at the door,
With incense to adore her might.`;

const HT_MISTRESS_2 = `A beacon in the night,
Hàng Trống forever bright and grand.
A treasure of the land,
Drawn by a human hand and soul.

To make the spirit whole,
The Water Mother's role is deep.
Her promises to keep,
She watches as we sleep and wake.`;

const HT_PRINCE_1 = `Dark clouds of swirling grey,
Surround the royal way he rides.
The orange horse now strides,
Across the mountain sides of old.

His verdant robe unrolled,
With black designs so bold and clear.
Four servants standing near,
They banish all the fear and doubt.

With drum and sword drawn out,
A blue fan weaves about the scene.
A head-wrap dyed in green,
A blue belt on his lean physique.

The golden seal antique,
The blessings people seek to claim.
To bear his royal name,
While shading techniques frame the space.

Pink blush upon his face,
A green and red embrace above.
A testament of love,
For him who guards the grove and morn.

Against the bitter scorn,
Of evil forces torn apart.
The great Bao Ha brave heart,
From which the blessings start and grow.

To let the fortune flow,
Across the waters' glow in spring.
Sweet incense people bring,
The spirit chants they sing aloud.`;

const HT_PRINCE_2 = `To pierce the heavy cloud,
And bless the eager crowd with wealth.
Good vigor and good health,
Protect them from the stealth of night.

The woodblock outlines bright,
Preserve the sacred right to see,
This mighty deity,
Who sets the nation free and whole.
The master of the soul,
In Hang Trong  art his scroll lives on.`;

const MOTHER_FOREST_1 = `Carved wood and brushes sweep,
Hang Trong borders keep the tone.
The Goddess sits on throne,
Above the mountains blown in blue.

A vision bright and true,
She guides the forest through each day.
Her green robes on display,
Swirl over mist and clay and wood.

The nymphs around her stood,
Bear fruit just as they should, in gold.
Two feather fans unfold,
A majesty so bold and high.

A golden bird sweeps by,
A monkey climbs the sky in play.
Her dark fan leads the way,
To keep the storms at bay and sleep.

Across the waters deep,
The forest shadows creep and glide.
With creatures by her side,
An elephant steps wide and strong.

A red horse trails along,
A white snake hears the song unseen.
The waters flow serene,
Where crabs and turtles glean and feed.

The golden fishes speed,
Along the river reed below.
The dyer's colors glow,
In half-washed tones that flow and blend.`;

const MOTHER_FOREST_2 = `The people's prayers ascend,
For Mother to defend our soil.
To save us from the toil,
As incense ribbons coil and spin.

The Len Dong chants begin,
To call her spirit in to heal.
We share the truths we feel,
Before her image, kneel and wait.

The woodblock prints our fate,
A sacred forest gate we find.
A heritage enshrined,
The Mother in our mind stands tall.`;

const HT_MANDARIN_1 = `On Drum Street once, the mallets rang;
then painters came, and brushes sang.
A woodblock stamps the ink-black scene;
then hands lay red and blue and green.

A red frame closes like a door;
black clouds curl over, roll, and pour.
The Prince rides white, hand at his chin,
no sword, no shout, a sly half-grin.

Gold spirals swim his robe of red,
jade at the throat, a single bell;
flame-fringed canopy overhead
shows rank, not shade. The wind can tell.

Twelve boys in gold cone hats keep pace,
one moon-round face, then face on face.
They bear a blade, a fan, a drum,
a musket for the wars to come,
a lacquered box of sealed decree,
a kettle swinging, low, for tea.

His road is hatched in red and black,
a slope no cart could ever track:
it climbs from village dust to where
the Mothers wait to hear each pray.

Four Mothers rule the sky, the ground,
the water, and the woods around;
the Princes ride between, and bear
the people's fevers, debts, and care.`;

const HT_MANDARIN_2 = `On feast nights, chầu văn songs begin;
a medium, robed in red, steps in
and lends the Prince her breath, her voice,
while the painting hangs, without noise:
proof that the summoned has a face,
a hat, a horse, a hoof, a place.

Families bring fruit, rice, a note:
a fever cooled, a shop afloat,
a son abroad, brought safely home.
No wonder. Just: not alone.

Few hands remain to cut the block;
each painting beats against the clock.
The street sold drums, then kept the beat
in painted prince and marching feet.`;

const HT_QUAN_HOANG = `Once this street sold skins for drums;
now a Prince on paper comes.

Underfoot, a black fish glares,
gold-scaled back, red whisker flares;
waves in rainbow bands unfurl,
each white crest a painted curl.

Black cap, red ribbons unbound;
white gauze pours, gold-swirled, around.
Foam-curl loose in easy hand,
calm as tides at his command.

Parasol of green and red
shows his rank above his head.
Two boys follow: one the pole,
one, black lacquer, guards the scroll.

Mothers rule four realms; his white
holds the Water Court's own light.
Fisher-folk, before they row,
light a stick and bow down low.

Chau van  strings and drums begin;
a vessel, white-robed, steps in,
lends the Prince a breath, and here
hangs the face that draws him near.

Few still carve the block. The few
grind the ore, and paint it true.
Drums fell silent. Still, the beat
rolls the waves beneath his feet.`;

const HT_DUC_THANH = `Red robe, and threads of gold,
black charcoal lines, so bold, he stands
in Hang Trong painters' hands.

Dark clouds coil; guards, in bands, display
banners that wave and sway.
Two women, quiet, stay below,
their golden fans aglow.

At Bach Dang's ebbing flow, he broke
Mongol ships, splintered oak.
Now, in his crimson cloak, he's said
to guard us from the dead.

Each Tet, when skies have shed their rain,
they paste him up again,
to ease the fever's pain, the fright
that wakes a child at night.

One thin sheet, pasted tight, is spread
against what haunts the bed:
a paper shield of red and gold.`;

/* ===== Buddhism ===== */
const BU_BUDDHA_BODHI = `Deep in the temple hall,
The wooden statues call our heart.
A pure and sacred art,
Though gold and lacquer part, they gleam.

Carved from an ancient dream,
The flowing robes will stream and fade.
Beneath the lotus shade,
A demon face is laid to rest.

By countless arms caressed,
The heavy hearts are blessed with grace.
One points up in this place,
A gentle, smiling face remains.

Amid the earthly pains,
The standing Buddha drains the chill.
Through valley, field, and hill,
The village people fill the shrine.

A heritage divine,
The incense leaves a sign of care.
For even in despair,
The humble farmers share their grief.

To find a sweet relief,
In ancient, deep belief they fall.
To answer sorrow's call,
The wooden Buddhas tall bless all.`;

const BU_MANJUSHRI_1 = `The colors all align,
To see the lotus shine so bright.
The Central Buddha's light,
Van Thu reveals his might and grace.

Pho Hien will take his place,
An elephant will grace the day.`;

const BU_MANJUSHRI_2 = `The painting on display,
In faith the people pray for peace.

All bitter hardships cease,
We found a sweet release anew.
A custom pure and true,
For families to view for years.`;

const BU_SHAKYA_1 = `A lotus blooming bright,
Awakens in the light of dawn.
The shadows now are gone,
And quiet faith is drawn anew.

With hair of deepest blue,
He offers healing dew and rest.
The crimson on his chest,
A patchwork woven best in gold.`;

const BU_SHAKYA_2 = `His heavy eyelids fold,
In mercy from the cold of earth.
A quiet, gentle birth,
Of wisdom and of worth unbound.

Upon the temple ground,
Where families surround the shrine.
The healing waters shine,
Within the bowl divine we see.
Beneath the Bodhi tree,
He sets our spirits free and bright.`;

const BU_THREE_SAINTS_1 = `Through swirling smoke of incense sweet,
Where mortal hearts and heaven meet,
Upon the sacred altar frame,
Three holy beings speak no name.
Woven in gold and silk refined,
They calm the storm within the mind.

At center stands the Lord of Light,
In saffron robes of sunlit bright,
With cobalt curls and peaceful eyes,
Reflecting endless Western skies.
Upon a lotus, towering high,
He offers grace that will not die–
Great Amitabha, boundless, free,
Who guides all souls to purity.

Beside his right, the Queen of Grace,
With soft compassion on her face.
She holds the willow branch and vase,
To sprinkle nectar through all space–
Avalokitesvara, gentle, mild,
Who hears the cry of every child,
Her floating ribbons, light as air,
Soothing the world of its despair.

Beside his left, in noble posture,
Stands Wisdom's Lord, the darkness' master.
Mahasthamaprapta holds the stem
Of lotus blooming like a gem,
Whose radiant beam cuts through the night,
To fill the ignorant with light.`;

const BU_THREE_SAINTS_2 = `For generations, home and hall
Hang this sacred trifold on the wall.
In quiet nights by candle beam,
When family gathers in a dream,
Ancestral prayers softly rise
Toward the Western Paradise.

More than mere brushwork, ink, or gold,
It holds the faith of young and old–
A shelter for the weary mind,
The gentlest anchor humans find,
A promise of eternal peace
Where all earthly sorrows cease.`;

const BU_GUANYIN = `Soft halo shines so clear,
Her gentle presence brings peace.
May all our sorrows cease,
Soft silken robes release pure grace.

Upon her crown we trace,
Lord Amitabha's place in gold.
A willow branch to hold,
Pure nectar, clean and bold, sweeps pain.

Red seals and ink remain,
Black Chinese scripts explain her name.
She hears our humble claim,
On home altars, a flame burns bright.

Through incense in the night,
Whole families unite to pray.
To keep bad luck away,
Quan Am will guide the day with love.

Descending from above,
A heart like white dove stays so deep.
Her watchful eye will keep,
And watch us while we sleep in peace.`;

const BU_MEDICINE = `Bathed in a sudden light,
The Healer's aura,  bright and blue.
To make the spirit new,
The holy azure hue awakes.

Whenever one's heart breaks,
The Great Physician takes the grief.
By holding up a leaf,
He gives the town relief and calm.

The nectar is a balm,
A quiet, healing psalm untold.
As ones begin grow old,
The altar starts to hold their plea.

A deep and endless sea,
Setting the people free from fright.
Appearing from the night,
The vision bathed in light, anew!`;

const BU_KSITIGARBHA = `A halo rings his head,
he frees the tortured dead from dread,
where shadows, heavy, spread,
pink lotus flowers fed will bloom;

a pearl dispels the gloom,
its light burns through the tomb-black night,
his robe, a golden light,
and ripples down so bright, in streams,

his six-ringed staff still gleams,
to wake the weary dream of pain,
a sheer and holy rain
falls soft to break the chain of birth,

and cleanse the soul of earth,
a lotus, given birth, now glows,
a spray of green that grows
beside a face that knows no fear,

he shields the home so near,
he walks through hell so drear, and stands,
and blesses mortal lands
with tender, healing hands, he lifts

the weary soul with gifts,
this holy glass shines swift and deep,
while ancestors may sleep,
his watchful eyes will keep, in bed.`;

/* ===== Ancestor Worship: Southern Vietnamese Glass Painting ===== */
const AN_BA_CHUA_TIEN = `Upon the Southern glass,
the village draws a mass of green–
the Mother owns the scene.
Her potent robes are seen in gold;

her prayer beads unfold
as she upholds a bold and bright
mala. On yellow-white,
she guides the people's sight today.

Two maidens share the way,
with feather fans. They sway the air,
and banners bear them there–
red Han-Nom scripts that share the soul

of those who gather whole.
To soothe the heavy toll of grief,
she guards the folk belief
where altars give relief from pain.

Through sun and heavy rain,
the pigments will remain in view.
This reverse-painting hue
reflects a vision, true and deep.

The generations keep
her image. While we sleep and grow
by Mekong waters' flow,
the sacred voices know her name.

Beyond a sylvan frame,
she brings the city fame and peace.
The blessings never cease,
as glass art brings release today.`;

const AN_BODHI_TREE = `A fragile pane of glass,
in backward strokes, hues pass and hold–
a story, brushed and told,
the Bodhi's leaves, still bold, still green;
a quiet, leaf-lit scene,
the Master, in that mean, sits bright,
his stillness holds the light.

His yellow robe, still bright, meets wood,
the frame stands dark, but good,
a hundred years it's stood through time,
to ring the household chime,

the old folk kneel each time, in prayer,
the lotus seat laid there,
the background, hushed as prayer, is made
to glow beneath the shade,

the Delta's shade has made this shrine,
a heritage divine,
where Southern hearts, still fine, hold dear,
this art that's held so near,

it watches, far and near, this space,
where ancestors embrace,
where candlelight, through grace, meets glass.`;

const AN_FLAMED_1 = `Through silvered glass, a sky of blue,
where cloud on cloud drifts softly through;
the painter worked from back to face,
each stroke unmended, held in place.

High up, in robes of moonlit white,
Quan Am sits in halo light;
her palms pressed close, her lotus pink,
her gaze the bridge across the brink.

Below, she takes her fiercest form:
a blue-faced king, a dancing storm;
his dragon staff cleaves through the air,
gold banner, purple ribbons flare.

Ānanda met him, dark and deep,
a burning ghost who broke his sleep;
the Buddha taught a rite to feed
all hungry ghosts in bitter need.

Raised silver letters flank the scene
and tell what all these ribbons mean:
Quan Am appears to ferry home
the sunken souls condemned to roam;
Ānanda asked: what he began
for ages passed from man to man.`;

const AN_FLAMED_2 = `When seventh moon flings wide the gate,
the hungry ghosts drift in, and wait;
the Blue King's glare keeps order still
while rice and salt line every sill.

We feed the drowned, the fevered, slain,
whom no descendants name again;
for fear may wear a mercy's face,
and none is lost beyond her grace.`;

const AN_GUAN_GONG = `In red and jade-green glass
Lord Guan lets seasons pass, and stays,
his dragon robe in rays,
his scarlet face a blaze, and proud.

Beard falling like a cloud,
long as an oath once vowed, he guides
the boats on Mekong's tides.
Two guards stand close beside, and wait:

Chau Xuong lifts the blade's weight,
Quan Binh's gold seal held straight and true.
The glass keeps them in view.
Red, gold, and blue burn through the night.

Traders kneel, palms held tight:
each promise, kept upright, is gold,
since peach-grove oaths of old.
In floods, the bonds still hold their ground.

In Delta homes, he's found,
a watchman, calm and sound, whose gaze
outlasts our fleeting days,
though frail as morning haze, it's glass.`;

const AN_GUANYIN_GLASS = `Across the glass they flow,
The painters make it glow, divine.
Such sacred, clean design,
Amidst dark wood, will shine with grace,

She holding highest place,
A vision fills the space, anew.
The lotus, bathed in dew,
In robes of white, a view for all.

She hears the humble call,
Her halo blessing all, pure white.
The glass aglow with light,
A rainbow base, a sight most grand.

An emerald vase in hand,
Two helpers near her stand all day.
The kneeling child will stay,
With folded hands he'll pray, serene.

A Southern, true folk scene
Upon reverse glass screen displayed.
By generations made,
It heals the heart dismayed at home.

No matter where ones roam,
She braves each southern home, secure.
Salvation, deep and pure,
A blessing to endure. Aglow!`;

const AN_JIUTIAN_1 = `The painter works the glass behind,
last strokes first, with patient mind.
No line can lift, no flaw can hide,
each stroke a prayer, each breath a guide.

She sits enthroned on clouds of cream,
her halo bright, a sunlit dream;
a crown of gold, a veil of blue,
a gaze as still as morning dew.

Her robe of paddy-green unfolds,
with blossoms stitched in threads of gold;
a collar like a cloud of lace,
dark beads, and hands in folded grace.

Two handmaids stand with hairpins bright,
their sleeves in blossom, peach and white;
they raise green fans on flame-tipped poles,
like leaves of fire, guarding souls.

On coral scrolls, in golden moons,
black letters sing their ancient tunes:
Her virtue gives life like the sky,
her grace is seas that never dry;
gold phoenix soars, jade dragons bow,
and all the heavens answer now.`;

const AN_JIUTIAN_2 = `Nine Heavens' Lady, sage of war,
she crossed south to the Mekong shore;
each moon, their incense curled and burned
for calmer rivers, boats returned.

At Tet they wipe the glass with care
and teach the child her name and pray.
A fragile pane, yet strong, it stays,
a people's faith through all their days.`;

const AN_TWENTY_FOUR_1 = `Painted backwards on the glass,
Watch the holy visions pass.
Wooden frames, deep and wide,
Twenty four divine guards reside.

Ancient words above each head,
Robes of blue and vivid red.
Swords of gold, lotus bright,
Standing strong in the sacred light.

Twenty four protectors stand,
Holding weapons in their hands.
Gods of wind, earth and sky,
Watching over all from on high.`;

const AN_TWENTY_FOUR_2 = `Southern altars build the space,
Honoring this holy grace.
Incense smoke fills the air,
Heaven shields the home from despair.

Folk art binds the young and old,
Moral truths are purely told.
Dharma lives in this art,
Guarding delta homes and the heart.`;

/*
  Ảnh slide: public/image/culture/pantheon/<key>-<số thứ tự>.png  (vd: yao-1.png, mother-3.png)
  Thơ: dán vào `poem` (xuống dòng thường, cách 1 dòng trống giữa các khổ).
  left/top: vị trí chữ trên thanh menu nhỏ (đã x0.75).
*/
export const SUBS: Sub[] = [
  {
    key: 'yao', label: 'Yao Taoism', left: 687.75, top: 34.8,
    slides: [
      { title: 'TONG DAN', layout: 'left', poem: TONG_DAN },
      { title: 'THAI UY', layout: 'left', poem: THAI_UY },
      { title: 'TAU KHANG SET', layout: 'top', poem: TAU_KHANG },
      { title: 'HOI FAN', layout: 'left', poem: HOI_FAN },
      { title: 'GREAT RITUAL BRIDGE SET', layout: 'top', poem: GREAT_RITUAL_BRIDGE },
    ],
  },
  {
    key: 'mother', label: 'Mother Goddess worship', left: 823.5, top: 34.8,
    slides: [
      { title: 'TAM TOA THANH MAU', layout: 'left', poem: TAM_TOA },
      { title: 'ONG LOT', layout: 'top', poem: ONG_LOT_1, poem2: ONG_LOT_2 },
      { title: 'ONG HOANG CUOI LOT', layout: 'right', poem: HOANG_CUOI_1, poem2: HOANG_CUOI_2 },
      { title: 'NGU VI TON QUAN', layout: 'right', poem: NGU_VI_1, poem2: NGU_VI_2 },
      { title: 'NGU HO', layout: 'top', poem: NGU_HO_1, poem2: NGU_HO_2 },
      { title: 'CONG DONG TU PHU', layout: 'bottom', poem: CONG_DONG_1, poem2: CONG_DONG_2 },
    ],
  },
  {
    key: 'hangtrong', label: 'Hang Trong Worship Paintings', left: 1089.75, top: 34.8,
    slides: [
      { title: 'SAMANTABHADRA BODHISATTVA', layout: 'left', poem: HT_SAMANTA },
      { title: 'THE THIRD MISTRESS OF WATER PALACE', layout: 'right', wide: true, imgH: 300, poem: HT_MISTRESS_1, poem2: HT_MISTRESS_2 },
      { title: 'THE SEVENTH PRINCE OF BAO HA WORSHIP PAINTING', layout: 'right', wide: true, imgH: 290, poem: HT_PRINCE_1, poem2: HT_PRINCE_2 },
      { title: 'THE MOTHER GODDESS OF THE FOREST', layout: 'right', wide: true, imgH: 250, poem: MOTHER_FOREST_1, poem2: MOTHER_FOREST_2 },
      { title: 'THE MANDARIN PRINCE LEADING THE TROOPS', layout: 'right', wide: true, imgH: 260, poem: HT_MANDARIN_1, poem2: HT_MANDARIN_2 },
      { title: 'QUAN HOANG RIDING A FISH', layout: 'right', imgH: 400, poem: HT_QUAN_HOANG },
      { title: 'DUC THANH TRAN', layout: 'left', poem: HT_DUC_THANH },
    ],
  },
  {
    key: 'buddhism', label: 'Buddhism', left: 698.25, top: 67,
    slides: [
      { title: 'BUDDHA AND BODHISATTVA', layout: 'left', poem: BU_BUDDHA_BODHI },
      { title: 'MANJUSHRI AND SAMANTABHADRA BODHISATTVA', layout: 'top', poem: BU_MANJUSHRI_1, poem2: BU_MANJUSHRI_2 },
      { title: 'SHAKYAMUNI BUDDHA', layout: 'top', poem: BU_SHAKYA_1, poem2: BU_SHAKYA_2 },
      { title: 'THE MOTHER GODDESS OF THE FOREST', layout: 'right', wide: true, imgH: 250, poem: MOTHER_FOREST_1, poem2: MOTHER_FOREST_2 },
      { title: 'THREE SAINTS OF THE WESTERN PURE LAND', layout: 'right', wide: true, imgH: 190, poem: BU_THREE_SAINTS_1, poem2: BU_THREE_SAINTS_2 },
      { title: 'GUANYIN BODHISATTVA', layout: 'left', poem: BU_GUANYIN },
      { title: 'MEDICINE BUDDHA', layout: 'left', poem: BU_MEDICINE },
      { title: 'KSITIGARBHA BODHISATTVA', layout: 'left', poem: BU_KSITIGARBHA },
    ],
  },
  {
    key: 'ancestor', label: 'Ancestor Worship: Southern Vietnamese Glass Painting', left: 828.75, top: 67,
    slides: [
      { title: 'BA CHUA TIEN', layout: 'left', poem: AN_BA_CHUA_TIEN },
      { title: 'BUDDHA MEDITATING UNDER THE BODHI TREE', layout: 'left', poem: AN_BODHI_TREE },
      { title: 'FLAMED-FACED MASTER', layout: 'right', imgH: 220, poem: AN_FLAMED_1, poem2: AN_FLAMED_2 },
      { title: 'GUAN GONG', layout: 'left', poem: AN_GUAN_GONG },
      { title: 'GUANYIN BODHISATTVA', layout: 'left', poem: AN_GUANYIN_GLASS },
      { title: 'JIUTIAN XUANNU', layout: 'right', imgH: 250, poem: AN_JIUTIAN_1, poem2: AN_JIUTIAN_2 },
      { title: 'TWENTY-FOUR CELESTIAL BEINGS', layout: 'top', poem: AN_TWENTY_FOUR_1, poem2: AN_TWENTY_FOUR_2 },
    ],
  },
];