export type Language = 'el' | 'en';

export interface TranslationSet {
  /* Nav */
  navAbout: string;
  navServices: string;
  navNature: string;
  navEvents: string;
  navContact: string;
  /* Hero */
  heroTagline: string;
  heroSub: string;
  heroQuote: string;
  heroCtaExplore: string;
  heroCtaBook: string;
  /* About */
  everythingIsVibration: string;
  everythingIsVibrationBody: string;
  aboutEleniTitle: string;
  aboutEleniRole: string;
  /* Services */
  servicesTitle: string;
  servicesSub: string;
  serviceIndividual: string;
  serviceIndividualDesc: string;
  serviceCouples: string;
  serviceCouplesDesc: string;
  serviceChild: string;
  serviceChildDesc: string;
  serviceVoice: string;
  serviceVoiceDesc: string;
  /* Misc UI */
  learnMore: string;
  aboutQuote: string;
  vibrationSpaceActivities: string;
  /* Gift card */
  giftCardTitle: string;
  giftCardDesc: string;
  giftCardCta: string;
  /* Nature */
  natureSectionTitle: string;
  natureSectionSub: string;
  natureSectionBody: string;
  natureSectionCta: string;
  natureFeat1: string;
  natureFeat2: string;
  natureFeat3: string;
  natureFeat4: string;
  natureQuote: string;
  /* Events */
  eventsTitle: string;
  eventUpcoming: string;
  eventEveryDay: string;
  eventStep1: string;
  eventStep2: string;
  eventStep3: string;
  eventsSub: string;
  sundayGathering: string;
  sundayGatheringTime: string;
  location: string;
  contactBtn: string;
  /* Footer / Contact */
  footerQuote: string;
  appointment: string;
  freeContribution: string;
  duration90: string;
  duration60: string;
  formTitle: string;
  formName: string;
  formEmail: string;
  formSubject: string;
  formMessage: string;
  formSubmit: string;
  formSuccess: string;
}

export const translations: Record<Language, TranslationSet> = {
  el: {
    navAbout: 'Η Φιλοσοφία',
    navServices: 'Συνεδρίες',
    navNature: 'Φύση',
    navEvents: 'Εκδηλώσεις',
    navContact: 'Επικοινωνία',

    heroTagline: 'Vibración',
    heroSub: 'Sound Healing & Therapies',
    heroQuote: 'Ένα δώρο φροντίδας και αγάπης στον εαυτό σας και στους αγαπημένους σας.',
    heroCtaExplore: 'Ανακαλύψτε',
    heroCtaBook: 'Κράτηση Ραντεβού',

    everythingIsVibration: 'Τα πάντα είναι δόνηση.',
    everythingIsVibrationBody:
      'Ο ήχος φτάνει εκεί που οι λέξεις δεν μπορούν — μαλακώνει το σώμα, ελευθερώνει την αναπνοή και αφυπνίζει την καρδιά. Στο Vibración σας προσκαλούμε να παραδοθείτε στη συχνότητα που σας ευθυγραμμίζει με αυτό που πραγματικά είστε.',
    aboutEleniTitle: 'Ελένη Χρηστίδου',
    aboutEleniRole: 'Μουσικολόγος · Ηχοθεραπεύτρια',

    servicesTitle: 'Θεραπευτικές Συνεδρίες',
    servicesSub: 'Κάθε συνεδρία είναι μια μοναδική εμπειρία ηχητικής ευεξίας',
    serviceIndividual: 'Ατομικό Ηχομασάζ',
    serviceIndividualDesc:
      'Μια βαθιά εμπειρία χαλάρωσης μέσα από ήχους και δονήσεις που ταξιδεύουν μέσα στο σώμα. Τα κύματα του ήχου διαπερνούν τους μυς, τα όργανα, ακόμα και τα κύτταρα.',
    serviceCouples: 'Ηχομασάζ για Ζευγάρια',
    serviceCouplesDesc:
      'Επανασύνδεση μέσα από τις συχνότητες της καρδιάς. Βαθιά χαλάρωση και σύνδεση με συχνότητες 432Hz & 639Hz — ιδανικό και ως γαμήλιο δώρο.',
    serviceChild: 'Για Γονέα & Παιδί',
    serviceChildDesc:
      'Σε έναν κόσμο γεμάτο ερεθίσματα, η σχέση γονέα και παιδιού έχει ανάγκη από στιγμές απλότητας, σιωπής και κοινής παρουσίας.',
    serviceVoice: 'Απελευθέρωση Φωνής',
    serviceVoiceDesc:
      'Η φωνή αναδύεται όταν υπάρχει ασφάλεια, ελευθερία και χώρος να ακουστεί. Εβδομαδιαίες συναντήσεις για όσους θέλουν να αναπνεύσουν και να τραγουδήσουν.',

    learnMore: 'Μάθε περισσότερα',
    aboutQuote: 'Ο ήχος φτάνει εκεί που οι λέξεις δεν μπορούν...',
    vibrationSpaceActivities: 'Διαλογισμός · Cacao Ceremony · Κύκλοι Τραγουδιών · Εργαστήρια Ευεξίας',

    giftCardTitle: 'Δώρο Ηχοθεραπείας',
    giftCardDesc:
      'Προσφέρετε μια εμπειρία που αγγίζει βαθιά. Οι κάρτες δώρου Vibración είναι διαθέσιμες για όλες τις συνεδρίες.',
    giftCardCta: 'Αποκτήστε μια Κάρτα Δώρου',

    natureSectionTitle: 'Ηχοθεραπεία στη Φύση',
    natureSectionSub: 'Όταν ο ήχος συναντά τη φύση',
    natureSectionBody:
      'Κάτω από τον ανοιχτό ουρανό, οι δονήσεις ταξιδεύουν ελεύθερες. Οι συνεδρίες στη φύση αποτελούν μια βαθύτερη εμπειρία σύνδεσης — με τον ήχο, με τη γη, με τον εαυτό σας. Τραγούδι του νερού, αέρας και τιτιβίσματα πλαισιώνουν τους ήχους των κρυστάλλινων κύπελλων και του ντέφι.',
    natureSectionCta: 'Κλείστε μια Συνεδρία στη Φύση',
    natureFeat1: 'Κρυστάλλινα & Θιβετιανά Κύπελλα',
    natureFeat2: 'Ήχος νερού & φύσης ως φόντο',
    natureFeat3: 'Συνεδρίες πρωί ή ηλιοβασίλεμα',
    natureFeat4: 'Φυσικά τοπία γύρω από την Καλαμάτα',
    natureQuote: 'Κάτω από τον ουρανό, κάθε δόνηση ταξιδεύει ελεύθερη...',

    eventsTitle: 'Κυριακάτικες Συναντήσεις',
    eventUpcoming: 'Upcoming Event',
    eventEveryDay: 'Κάθε Κυριακή',
    eventStep1: 'Χαλάρωση μέσω της <strong>Τεχνικής Alexander</strong> — αφήνουμε την ένταση και αφυπνίζουμε τη φυσική ροή ενέργειας.',
    eventStep2: '<strong>Mantras Τσάκρα</strong> — βυθιζόμαστε στις δονήσεις του ήχου της φωνής μας.',
    eventStep3: '<strong>Κιρτάν</strong> — τραγουδώντας θεραπευτικά τραγούδια που ανοίγουν την καρδιά.',
    eventsSub: 'Συνδεόμαστε ~ Συγκινούμαστε ~ Συνηχούμε',
    sundayGathering: 'Εργαστήριο Θεραπευτικών Τραγουδιών',
    sundayGatheringTime: 'Κάθε Κυριακή στις 19:30',
    location: 'Φαρών 90, Καλαμάτα',
    contactBtn: 'Κράτηση Θέσης',

    footerQuote: 'Μέχρι να συναντηθούμε να θυμόμαστε να αναπνέουμε... Κάθε στιγμή.',
    appointment: 'Πληροφορίες & Ραντεβού',
    freeContribution: 'Ελεύθερη Συνεισφορά',
    duration90: 'Διάρκεια: 90 λεπτά',
    duration60: 'Διάρκεια: 60 λεπτά',
    formTitle: 'Στείλτε μας μήνυμα',
    formName: 'Όνομα',
    formEmail: 'Email',
    formSubject: 'Θέμα',
    formMessage: 'Μήνυμα',
    formSubmit: 'Αποστολή',
    formSuccess: 'Το μήνυμά σας στάλθηκε με επιτυχία!',
  },

  en: {
    navAbout: 'Philosophy',
    navServices: 'Services',
    navNature: 'Nature',
    navEvents: 'Events',
    navContact: 'Contact',

    heroTagline: 'Vibración',
    heroSub: 'Sound Healing & Therapies',
    heroQuote: 'A gift of care and love — for yourself and for those you hold dear.',
    heroCtaExplore: 'Explore',
    heroCtaBook: 'Book a Session',

    everythingIsVibration: 'Everything is vibration.',
    everythingIsVibrationBody:
      'Sound reaches where words cannot — it softens the body, frees the breath, and awakens the heart. At Vibración, we invite you to surrender to the frequency that aligns you with who you truly are.',
    aboutEleniTitle: 'Eleni Christidou',
    aboutEleniRole: 'Musicologist · Sound Therapist',

    servicesTitle: 'Therapeutic Sessions',
    servicesSub: 'Each session is a unique journey into sound and wellbeing',
    serviceIndividual: 'Individual Sound Massage',
    serviceIndividualDesc:
      'A deep relaxation experience through sounds and vibrations travelling through the body. Sound waves penetrate muscles, organs, and even cells.',
    serviceCouples: 'Sound Massage for Couples',
    serviceCouplesDesc:
      'Reconnect through heart frequencies. Deep relaxation and connection with 432Hz & 639Hz frequencies — ideal as a wedding gift too.',
    serviceChild: 'Parent & Child',
    serviceChildDesc:
      'In a world full of stimuli, the parent-child relationship needs moments of simplicity, silence, and shared presence.',
    serviceVoice: 'Voice Release',
    serviceVoiceDesc:
      'The voice emerges when there is safety, freedom, and space to be heard. Weekly meetings for those who wish to breathe and sing.',

    learnMore: 'Learn more',
    aboutQuote: 'Sound reaches where words cannot...',
    vibrationSpaceActivities: 'Meditation · Cacao Ceremony · Song Circles · Wellness Workshops',

    giftCardTitle: 'Sound Therapy Gift Card',
    giftCardDesc:
      'Offer an experience that touches deeply. Vibración gift cards are available for all sessions.',
    giftCardCta: 'Get a Gift Card',

    natureSectionTitle: 'Sound Therapy in Nature',
    natureSectionSub: 'When sound meets the natural world',
    natureSectionBody:
      'Under the open sky, vibrations travel freely. Outdoor sessions offer a deeper experience of connection — with sound, with the earth, and with yourself. Birdsong, water, and breeze embrace the resonance of crystal bowls and frame drum.',
    natureSectionCta: 'Book a Nature Session',
    natureFeat1: 'Crystal & Tibetan Singing Bowls',
    natureFeat2: 'Water & nature sounds as backdrop',
    natureFeat3: 'Morning or sunset sessions',
    natureFeat4: 'Natural landscapes around Kalamata',
    natureQuote: 'Under the open sky, every vibration travels free...',

    eventsTitle: 'Sunday Gatherings',
    eventUpcoming: 'Upcoming Event',
    eventEveryDay: 'Every Sunday',
    eventStep1: '<strong>Alexander Technique</strong> relaxation — releasing tension and awakening the body\'s natural energy flow.',
    eventStep2: '<strong>Chakra Mantras</strong> — immersing in the vibrations of our own voice.',
    eventStep3: '<strong>Kirtan</strong> — singing healing songs that open the heart.',
    eventsSub: 'Connect ~ Feel ~ Resonate',
    sundayGathering: 'Therapeutic Song Workshop',
    sundayGatheringTime: 'Every Sunday at 19:30',
    location: 'Faron 90, Kalamata',
    contactBtn: 'Book Your Spot',

    footerQuote: 'Until we meet, remember to breathe… Every moment.',
    appointment: 'Information & Appointments',
    freeContribution: 'Free Contribution',
    duration90: 'Duration: 90 minutes',
    duration60: 'Duration: 60 minutes',
    formTitle: 'Send us a message',
    formName: 'Name',
    formEmail: 'Email',
    formSubject: 'Subject',
    formMessage: 'Message',
    formSubmit: 'Send',
    formSuccess: 'Your message has been sent successfully!',
  },
};
