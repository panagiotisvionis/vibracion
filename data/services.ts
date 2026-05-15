export type Language = 'el' | 'en';

export interface ServiceData {
  id: string;
  photo: string;       // card + hero bg
  accentPhoto?: string; // secondary image
  duration: Record<Language, string>;
  title: Record<Language, string>;
  tagline: Record<Language, string>;
  intro: Record<Language, string>;
  fullDesc: Record<Language, string>;
  benefits: Record<Language, string[]>;
  whatToExpect: Record<Language, string[]>;
  whoIsItFor: Record<Language, string>;
  quote: Record<Language, string>;
  frequency?: string; // e.g. "432Hz & 639Hz"
}

export const SERVICES: ServiceData[] = [
  {
    id: 'individual',
    photo: '1415.jpg',
    accentPhoto: '957.jpg',
    duration: { el: '60 ή 90 λεπτά', en: '60 or 90 minutes' },
    title: { el: 'Ατομικό Ηχομασάζ', en: 'Individual Sound Massage' },
    tagline: {
      el: 'Μια βαθιά εμπειρία ηχητικής ευεξίας για εσάς',
      en: 'A deep sound wellness experience, just for you',
    },
    intro: {
      el: 'Ξαπλώνετε άνετα ενώ Θιβετιανά κύπελλα τοποθετούνται πάνω και γύρω από το σώμα σας. Οι δονήσεις ταξιδεύουν σε βάθος.',
      en: 'You lie comfortably while Tibetan bowls are placed on and around your body. The vibrations travel deep within.',
    },
    fullDesc: {
      el: 'Το Ατομικό Ηχομασάζ είναι μια από τις πιο βαθιές εμπειρίες χαλάρωσης και αυτοθεραπείας που μπορεί να βιώσει κανείς. Τα Θιβετιανά κύπελλα, φτιαγμένα από συνδυασμό επτά μετάλλων, παράγουν πλούσιους, πολύπλοκους τόνους που αντηχούν τόσο στον αέρα όσο και μέσα στο ίδιο το σώμα σας.\n\nΚαθώς τα κύπελλα χτυπιούνται ή περιστρέφονται, τα κύματα ήχου διαπερνούν τους μυς, τα όργανα, ακόμα και τα κύτταρα — δημιουργώντας μια αίσθηση βαθιάς γαλήνης που φτάνει πέρα από τα λόγια.\n\nΗ συνεδρία ξεκινά με μια σύντομη συζήτηση για το πώς αισθάνεστε, ακολουθεί η εμπειρία των ήχων και ολοκληρώνεται με χρόνο ηρεμίας και ενσωμάτωσης.',
      en: 'Individual Sound Massage is one of the deepest relaxation and self-healing experiences one can have. Tibetan bowls, crafted from an alloy of seven metals, produce rich, complex tones that resonate both in the air and within your body.\n\nAs the bowls are struck or circled, the sound waves penetrate your muscles, organs, and even your cells — creating a sense of deep peace that goes beyond words.\n\nThe session begins with a short conversation about how you feel, moves into the sound experience itself, and closes with quiet time for integration.',
    },
    benefits: {
      el: [
        'Βαθιά χαλάρωση νευρικού συστήματος',
        'Ανακούφιση από χρόνιο στρες και άγχος',
        'Μείωση μυϊκής έντασης και πόνου',
        'Βελτίωση ποιότητας ύπνου',
        'Συναισθηματική ισορροπία',
        'Αίσθηση ανανέωσης & ενεργητικότητας',
      ],
      en: [
        'Deep relaxation of the nervous system',
        'Relief from chronic stress and anxiety',
        'Reduction of muscle tension and pain',
        'Improved sleep quality',
        'Emotional balance',
        'Sense of renewal & vitality',
      ],
    },
    whatToExpect: {
      el: [
        'Ζεστό, ήσυχο χώρο με ατμόσφαιρα ηρεμίας',
        'Θιβετιανά κύπελλα πάνω & γύρω από το σώμα',
        'Δόνηση που γίνεται αισθητή σωματικά',
        'Κατάσταση βαθιάς χαλάρωσης — σχεδόν ύπνου',
        'Ήσυχη ανάκαμψη στο τέλος',
      ],
      en: [
        'Warm, quiet space with a serene atmosphere',
        'Tibetan bowls on and around the body',
        'Vibration felt physically throughout',
        'State of deep relaxation — almost sleep',
        'Quiet recovery time at the end',
      ],
    },
    whoIsItFor: {
      el: 'Ιδανικό για όποιον επιθυμεί βαθιά χαλάρωση, ανακούφιση από στρες, ή απλά ένα δώρο στον εαυτό του. Δεν απαιτείται καμία προηγούμενη εμπειρία.',
      en: 'Ideal for anyone seeking deep relaxation, stress relief, or simply a gift to themselves. No prior experience required.',
    },
    quote: {
      el: '"Βγαίνω αισθανόμενη ότι το σώμα μου άκουσε αυτό που χρειαζόταν."',
      en: '"I leave feeling like my body heard exactly what it needed."',
    },
  },
  {
    id: 'couples',
    photo: '1920.webp',
    accentPhoto: '957.jpg',
    duration: { el: '90 λεπτά', en: '90 minutes' },
    frequency: '432Hz & 639Hz',
    title: { el: 'Ηχομασάζ για Ζευγάρια', en: 'Sound Massage for Couples' },
    tagline: {
      el: 'Επανασυνδεθείτε μέσα από τις συχνότητες της καρδιάς',
      en: 'Reconnect through the frequencies of the heart',
    },
    intro: {
      el: 'Δύο άνθρωποι, δύο κύπελλα, μία κοινή δόνηση. Μια εμπειρία που βαθαίνει τη σύνδεση και αφυπνίζει την ενσυναίσθηση.',
      en: 'Two people, two bowls, one shared vibration. An experience that deepens connection and awakens empathy.',
    },
    fullDesc: {
      el: 'Στη σημερινή ζωή, τα ζευγάρια συχνά βρίσκουν ελάχιστες στιγμές πραγματικής, αθόρυβης παρουσίας μαζί. Το Ηχομασάζ για Ζευγάρια δημιουργεί ακριβώς αυτόν τον χώρο.\n\nΔύο άνθρωποι ξαπλώνουν δίπλα-δίπλα ενώ Θιβετιανά κύπελλα τοποθετούνται πάνω και γύρω τους. Οι συχνότητες 432Hz (αρμονία με τη φύση) και 639Hz (συχνότητα της καρδιάς) ενισχύουν την εμπιστοσύνη, την επικοινωνία και την ενσυναίσθηση μεταξύ των δύο ανθρώπων.\n\nΗ εμπειρία ολοκληρώνεται με μοιρασμένη σιωπή — μια σπάνια πολυτέλεια στη σύγχρονη καθημερινότητα. Ιδανική επίσης ως γαμήλιο δώρο ή δώρο επετείου.',
      en: 'In today\'s life, couples rarely find moments of true, silent presence together. Sound Massage for Couples creates exactly that space.\n\nTwo people lie side by side while Tibetan bowls are placed on and around them. The frequencies 432Hz (harmony with nature) and 639Hz (the frequency of the heart) enhance trust, communication, and empathy between the two people.\n\nThe experience closes with shared silence — a rare luxury in modern daily life. Also ideal as a wedding gift or anniversary gift.',
    },
    benefits: {
      el: [
        'Βαθύτερη σύνδεση & εμπιστοσύνη',
        'Ενισχυμένη ενσυναίσθηση',
        'Κοινή εμπειρία ηρεμίας',
        'Ανακούφιση από στρες για δύο',
        'Ηχητική αρμονία 432Hz & 639Hz',
        'Ιδανικό ως γαμήλιο δώρο',
      ],
      en: [
        'Deeper connection & trust',
        'Enhanced empathy',
        'Shared experience of peace',
        'Stress relief for two',
        'Sound harmony 432Hz & 639Hz',
        'Ideal as a wedding gift',
      ],
    },
    whatToExpect: {
      el: [
        'Ξαπλωτοί δίπλα-δίπλα σε άνετη επιφάνεια',
        'Κύπελλα σε αρμονικές συχνότητες',
        'Κοινή εμπειρία χωρίς λόγια',
        'Αίσθηση σύνδεσης που παραμένει μετά',
        'Εναλλακτικά: ως δώρο αιφνιδιασμός για τον/την σύντροφό σας',
      ],
      en: [
        'Lying side by side on a comfortable surface',
        'Bowls tuned to harmonic frequencies',
        'Shared experience without words',
        'Sense of connection that lingers after',
        'Alternatively: as a surprise gift for your partner',
      ],
    },
    whoIsItFor: {
      el: 'Για ζευγάρια που θέλουν να μοιραστούν μια βαθιά εμπειρία, για νεόνυμφους, για επετείους — ή απλά για δύο ανθρώπους που αγαπούν ο ένας τον άλλον.',
      en: 'For couples who want to share a deep experience, for newlyweds, for anniversaries — or simply for two people who love each other.',
    },
    quote: {
      el: '"Ήταν η πιο ήρεμη στιγμή που έχω μοιραστεί με τον σύντροφό μου εδώ και χρόνια."',
      en: '"It was the quietest, most connected moment I have shared with my partner in years."',
    },
  },
  {
    id: 'parent-child',
    photo: '1487.jpg',
    accentPhoto: '1414.jpg',
    duration: { el: '90 λεπτά', en: '90 minutes' },
    title: { el: 'Για Γονέα & Παιδί', en: 'Parent & Child' },
    tagline: {
      el: 'Στιγμές απλότητας, σιωπής και κοινής παρουσίας',
      en: 'Moments of simplicity, silence and shared presence',
    },
    intro: {
      el: 'Σε έναν κόσμο γεμάτο ερεθίσματα, ο ήχος δημιουργεί ένα νησί ηρεμίας για γονέα και παιδί μαζί.',
      en: 'In a world full of stimuli, sound creates an island of calm for parent and child together.',
    },
    fullDesc: {
      el: 'Η σχέση γονέα-παιδιού έχει ανάγκη από στιγμές που δεν υπάρχουν οθόνες, βιασύνη ή υποχρεώσεις. Μόνο εσείς, το παιδί σας και ο ήχος.\n\nΗ συνεδρία σχεδιάζεται ανάλογα με την ηλικία του παιδιού — από βρέφη μέχρι εφήβους. Τα μικρά παιδιά συχνά ηρεμούν αμέσως με τους ήχους, ενώ τα μεγαλύτερα παιδιά βιώνουν μια νέα μορφή χαλάρωσης.\n\nΟ γονέας μπορεί να παραστεί παθητικά ή να είναι ενεργός μέρος της εμπειρίας, κρατώντας το παιδί ή ξαπλώνοντας δίπλα του. Η Ελένη καθοδηγεί με ευαισθησία και ευελιξία.',
      en: 'The parent-child relationship needs moments without screens, rush, or obligations. Just you, your child, and sound.\n\nThe session is designed according to the child\'s age — from infants to teenagers. Young children often calm down immediately with the sounds, while older children experience a new form of relaxation.\n\nThe parent can be passive or actively part of the experience, holding the child or lying beside them. Eleni guides with sensitivity and flexibility.',
    },
    benefits: {
      el: [
        'Βαθύτερη σύνδεση γονέα-παιδιού',
        'Ηρεμία και επαναφορά στο "τώρα"',
        'Μείωση άγχους & υπερκινητικότητας',
        'Εμπειρία χωρίς οθόνες & ψηφιακά ερεθίσματα',
        'Κοινή ανάμνηση αγάπης',
        'Ενίσχυση αίσθησης ασφάλειας',
      ],
      en: [
        'Deeper parent-child connection',
        'Calm and return to the "now"',
        'Reduction of anxiety & hyperactivity',
        'Screen-free experience',
        'Shared memory of love',
        'Strengthened sense of security',
      ],
    },
    whatToExpect: {
      el: [
        'Μαλακοί ήχοι προσαρμοσμένοι στην ηλικία',
        'Ο γονέας παρών καθ\' όλη τη διάρκεια',
        'Ευέλικτο πρόγραμμα ανάλογα με τις ανάγκες',
        'Παιγνιώδης και ζεστή ατμόσφαιρα για παιδιά',
        'Χρόνος χαλάρωσης μαζί στο τέλος',
      ],
      en: [
        'Soft sounds adapted to the child\'s age',
        'Parent present throughout',
        'Flexible approach based on needs',
        'Playful and warm atmosphere for children',
        'Shared relaxation time at the end',
      ],
    },
    whoIsItFor: {
      el: 'Για γονείς με παιδιά οποιασδήποτε ηλικίας — από βρέφη έως εφήβους. Ιδανικό και για γονείς που νιώθουν αποσυνδεδεμένοι από τα παιδιά τους λόγω του γρήγορου ρυθμού ζωής.',
      en: 'For parents with children of any age — from infants to teenagers. Also ideal for parents who feel disconnected from their children due to the fast pace of life.',
    },
    quote: {
      el: '"Το παιδί μου κοιμήθηκε στην αγκαλιά μου σε λίγα λεπτά. Ήταν μαγεία."',
      en: '"My child fell asleep in my arms within minutes. It was pure magic."',
    },
  },
  {
    id: 'voice',
    photo: '1849.jpg',
    accentPhoto: '1920.webp',
    duration: { el: 'Κάθε Δευτέρα', en: 'Every Monday' },
    title: { el: 'Απελευθέρωση Φωνής', en: 'Voice Release' },
    tagline: {
      el: 'Η φωνή σας αναδύεται όταν υπάρχει ασφάλεια και χώρος',
      en: 'Your voice emerges when there is safety and space',
    },
    intro: {
      el: 'Εβδομαδιαίες ομαδικές συναντήσεις για όσους θέλουν να εξερευνήσουν τη φωνή τους — χωρίς κρίση, χωρίς σωστό ή λάθος.',
      en: 'Weekly group meetings for those who want to explore their voice — without judgment, without right or wrong.',
    },
    fullDesc: {
      el: 'Η φωνή είναι ένα από τα πιο άμεσα εργαλεία αυτοέκφρασης και θεραπείας που έχουμε. Και όμως, πολλοί από εμάς κρατάμε τη φωνή μας κλειδωμένη — από ντροπή, από φόβο, από συνήθεια.\n\nΣτις εβδομαδιαίες συναντήσεις Απελευθέρωσης Φωνής, η Ελένη δημιουργεί ένα χώρο εμπιστοσύνης όπου κάθε φωνή είναι ευπρόσδεκτη ακριβώς όπως είναι. Μέσα από ασκήσεις αναπνοής, ηχητικές εξερευνήσεις, τραγούδι και αυτοσχεδιασμό, η ομάδα αφήνει τη φωνή να κυλήσει ελεύθερα.\n\nΔεν χρειάζεται να ξέρετε να τραγουδάτε. Δεν χρειάζεται να έχετε μουσική εμπειρία. Χρειάζεται μόνο η επιθυμία να αναπνεύσετε και να ακουστείτε.',
      en: 'The voice is one of the most direct tools of self-expression and healing we have. And yet, many of us keep our voice locked — from shame, from fear, from habit.\n\nIn the weekly Voice Release gatherings, Eleni creates a space of trust where every voice is welcome exactly as it is. Through breathing exercises, sonic exploration, singing, and improvisation, the group lets the voice flow freely.\n\nYou don\'t need to know how to sing. You don\'t need musical experience. All you need is the desire to breathe and be heard.',
    },
    benefits: {
      el: [
        'Απελευθέρωση συναισθηματικών αποθεμάτων',
        'Ενίσχυση αυτοπεποίθησης',
        'Σύνδεση με ομάδα ανθρώπων',
        'Μείωση άγχους μέσω φωνής & αναπνοής',
        'Χαρά, παιχνίδι, δημιουργικότητα',
        'Εβδομαδιαία ρουτίνα ευεξίας',
      ],
      en: [
        'Release of emotional reserves',
        'Strengthened self-confidence',
        'Connection with a community',
        'Anxiety reduction through voice & breath',
        'Joy, play, and creativity',
        'Weekly wellbeing routine',
      ],
    },
    whatToExpect: {
      el: [
        'Μικρή ομάδα — ζεστή ατμόσφαιρα',
        'Ασκήσεις αναπνοής & φωνής',
        'Τραγούδι χωρίς κρίση, χωρίς αξιολόγηση',
        'Αυτοσχεδιασμός & ηχητική εξερεύνηση',
        'Αίσθηση ελευθερίας που παραμένει',
      ],
      en: [
        'Small group — warm atmosphere',
        'Breathing & voice exercises',
        'Singing without judgment or evaluation',
        'Improvisation & sonic exploration',
        'A sense of freedom that stays with you',
      ],
    },
    whoIsItFor: {
      el: 'Για όποιον νιώθει ότι η φωνή του είναι "μπλοκαρισμένη", για όσους αγαπούν το τραγούδι αλλά δεν τολμούν, για εκείνους που ψάχνουν μια εβδομαδιαία συνάντηση με τον εαυτό τους.',
      en: 'For anyone who feels their voice is "blocked", for those who love singing but don\'t dare, for those seeking a weekly meeting with themselves.',
    },
    quote: {
      el: '"Για πρώτη φορά άκουσα τη φωνή μου χωρίς να θέλω να την κρύψω."',
      en: '"For the first time, I heard my voice without wanting to hide it."',
    },
  },
];
