
export type Language = 'el' | 'en';

export interface TranslationSet {
  navAbout: string;
  navServices: string;
  navContact: string;
  heroTagline: string;
  heroSub: string;
  everythingIsVibration: string;
  everythingIsVibrationBody: string;
  servicesTitle: string;
  serviceIndividual: string;
  serviceIndividualDesc: string;
  serviceCouples: string;
  serviceCouplesDesc: string;
  serviceChild: string;
  serviceChildDesc: string;
  serviceVoice: string;
  serviceVoiceDesc: string;
  eventsTitle: string;
  eventsSub: string;
  sundayGathering: string;
  sundayGatheringTime: string;
  location: string;
  contactBtn: string;
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
    navAbout: "Η Φιλοσοφία",
    navServices: "Συνεδρίες",
    navContact: "Επικοινωνία",
    heroTagline: "Vibración",
    heroSub: "Sound Healing & Therapies",
    everythingIsVibration: "Τα πάντα είναι δόνηση.",
    everythingIsVibrationBody: "Ο ήχος φτάνει εκεί που οι λέξεις δεν μπορούν—μαλακώνει το σώμα, ελευθερώνει την αναπνοή και αφυπνίζει την καρδιά. Στο Vibración, σας προσκαλούμε να παραδοθείτε στη συχνότητα που σας ευθυγραμμίζει με αυτό που πραγματικά είστε.",
    servicesTitle: "Θεραπευτικές Συνεδρίες",
    serviceIndividual: "Ατομικό Ηχομασάζ",
    serviceIndividualDesc: "Μια βαθιά εμπειρία χαλάρωσης μέσα από ήχους και δονήσεις που ταξιδεύουν μέσα στο σώμα. Τα κύματα του ήχου διαπερνούν τους μυς, τα όργανα, ακόμα και τα κύτταρα.",
    serviceCouples: "Ηχομασάζ για Ζευγάρια",
    serviceCouplesDesc: "Επανασύνδεση μέσα από τις συχνότητες της καρδιάς. Μια εμπειρία βαθιάς χαλάρωσης και σύνδεσης, με συχνότητες 432Hz & 639Hz που ενισχύουν την εμπιστοσύνη και την ενσυναίσθηση.",
    serviceChild: "Για Γονέα & Παιδί",
    serviceChildDesc: "Σε έναν κόσμο γεμάτο ερεθίσματα, η σχέση γονέα και παιδιού έχει ανάγκη από στιγμές απλότητας, σιωπής και κοινής παρουσίας.",
    serviceVoice: "Απελευθέρωση Φωνής",
    serviceVoiceDesc: "Η φωνή αναδύεται όταν υπάρχει ασφάλεια, ελευθερία και χώρος να ακουστεί. Εβδομαδιαίες συναντήσεις για όσους θέλουν να αναπνεύσουν και να τραγουδήσουν.",
    eventsTitle: "Κυριακάτικες Συναντήσεις",
    eventsSub: "Συνδεόμαστε ~ Συγκινούμαστε ~ Συνηχούμε",
    sundayGathering: "Εργαστήριο Θεραπευτικών Τραγουδιών",
    sundayGatheringTime: "Κάθε Κυριακή στις 19:30",
    location: "Φαρών 90, Καλαμάτα",
    contactBtn: "Κράτηση Θέσης",
    footerQuote: "Μέχρι να συναντηθούμε να θυμόμαστε να αναπνέουμε... Κάθε στιγμή.",
    appointment: "Πληροφορίες & Ραντεβού",
    freeContribution: "Ελεύθερη Συνεισφορά",
    duration90: "Διάρκεια: 90 λεπτά",
    duration60: "Διάρκεια: 60 λεπτά",
    formTitle: "Στείλτε μας μήνυμα",
    formName: "Όνομα",
    formEmail: "Email",
    formSubject: "Θέμα",
    formMessage: "Μήνυμα",
    formSubmit: "Αποστολή",
    formSuccess: "Το μήνυμά σας στάλθηκε με επιτυχία!",
  },
  en: {
    navAbout: "Philosophy",
    navServices: "Services",
    navContact: "Contact",
    heroTagline: "Vibración",
    heroSub: "Sound Healing & Therapies",
    everythingIsVibration: "Everything is vibration.",
    everythingIsVibrationBody: "Sound reaches where words cannot—it softens the body, frees the breath, and awakens the heart. At Vibración, we invite you to surrender to the frequency that aligns you with who you truly are.",
    servicesTitle: "Therapeutic Sessions",
    serviceIndividual: "Individual Sound Massage",
    serviceIndividualDesc: "A deep relaxation experience through sounds and vibrations traveling through the body. Sound waves penetrate muscles, organs, and even cells.",
    serviceCouples: "Sound Massage for Couples",
    serviceCouplesDesc: "Reconnect through heart frequencies. An experience of deep relaxation and connection, with 432Hz & 639Hz frequencies enhancing trust and empathy.",
    serviceChild: "Parent & Child",
    serviceChildDesc: "In a world full of stimuli, the parent-child relationship needs moments of simplicity, silence, and shared presence.",
    serviceVoice: "Voice Release",
    serviceVoiceDesc: "The voice emerges when there is safety, freedom, and space to be heard. Weekly meetings for those who wish to breathe and sing.",
    eventsTitle: "Sunday Gatherings",
    eventsSub: "Connect ~ Feel ~ Resonate",
    sundayGathering: "Therapeutic Song Workshop",
    sundayGatheringTime: "Every Sunday at 19:30",
    location: "Faron 90, Kalamata",
    contactBtn: "Book Your Spot",
    footerQuote: "Until we meet, remember to breathe... Every moment.",
    appointment: "Information & Appointments",
    freeContribution: "Free Contribution",
    duration90: "Duration: 90 minutes",
    duration60: "Duration: 60 minutes",
    formTitle: "Send us a message",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Send",
    formSuccess: "Your message has been sent successfully!",
  }
};
