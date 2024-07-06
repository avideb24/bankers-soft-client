import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";


i18next.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    returnObjects: true,
    resources: {
        en: {
            translation: {
                Sidebar:{
                    dashboard: 'Dashboard',
                    customers: 'Customers',
                    area: 'area',
                    addNew: 'Add New',
                    customerList: 'Customer List',
                    customerLaser: 'Customer Laser',
                    reports: 'Reports',
                    settlementReports: 'Settlement Reports',
                    collectionReports: 'Collection Reports',
                    collectionSheet: 'Collection Sheet',
                    messageReports: 'Message Reports',
                    accounts: 'Accounts',
                    share: 'Share',
                    savings: 'Savings',
                    fixedDeposit: 'Fixed Deposit',
                    dps: 'DPS',
                    loan: 'Loan',
                    insurance: 'Insurance',
                    banking: 'Banking',
                    incomeExpenditure: 'Income - Expenditure',
                    salariesOfEmployees: 'Salaries of Employees',
                    profitDistribution: 'Profit Distribution',
                    settings: 'Settings',
                    businessSettings: 'Bussiness Settings',
                    profile: 'Profile',
                    users: 'Users',
                    userList: 'User List',
                    helpCenter: 'Help Center',
                    logout: 'Log Out',
                },
                Header: {
                    searchCustomer: 'Search Customer',
                    addNew: 'Add New',
                    newLoan: 'New Loan',
                    newDps: 'New DPS',
                    newSavings: 'New Savings',
                },
                AdminDashboard: {
                    CompleteProfile: {
                        warning: 'Warning',
                        text: 'Your profile is incomplete. Please submit all information including your photo in the profile.',
                        profileSetUp: 'Profile Setup',
                    },
                    Overview: {
                        overview: 'Overview',
                        fullReport: 'Full Report',
                        availableBalance: 'Available Balance',
                        businessCapital: 'Business Capital', 
                        profits: 'Profits', 
                        activeCustomers: 'Active Customers',
                        totalCustomers: 'Total Customers',
                        profile: 'Profile',
                    },
                    LastTransactions: {
                        lastTransactions: 'Last Transactions',
                        seeAll: 'See All',
                    },
                    TodaysReport: {
                        todaysReport: "Today's Report",
                        collections: 'Collections',
                        distribution : 'Distribution',
                        expenses : 'Expenses',
                        profits : ' Profits',
                        fineCollection : 'Fine Collection',
                        totalCash  : 'Total Cash',
                        employeeReports: 'Employee Reports',
                        smsReports: 'SMS Reports',
                        notFound: 'No records founds!',
                        seeMore: 'See More',
                    },
                },
                Customers: {
                    area: 'Area',
                    newArea: 'New Area',
                    editArea: 'Edit Area',
                    areaList: 'Area List',
                    areaName: 'Area Name',
                    search: 'Search',
                    searchArea: 'Search Area',
                    customerList: 'Customer List',
                    allCustomers: 'All Customers',
                    customerName: 'Customer Name',
                    mobile: 'Mobile',
                    accountNo: 'Account No',
                    customerLaser: 'Customer Laser',
                    print: 'Print',
                    notFound: 'No Data found!',
                    save: 'Save',
                    close: 'Close',
                },
                Reports:{
                    SettlementReports: {
                        settlementReports: 'Settlement Reports',
                        ownersShare: 'Owners Shares',
                        customersShare: 'Customers Shares',
                        customersSavings: 'Customers Savings',
                        fixedDeposit: 'Fixed Deposits',
                        customerDps: 'Customers DPS',
                        insurance : 'Insurance',
                        customerLoan : 'Customer Loan',
                        bankDeposit : 'Bank Deposit',
                        totalProfit : 'Total cash with profit',
                        print: 'Print',
                    },
                    ColletionReports: {
                        collectionReports: 'Collection Reports',
                        transactionSummary: 'Transaction Summary',
                        transaction: 'Transaction',
                        collection: 'Collection',
                        disbursement: 'Disbursement',
                        search: 'Search',
                        print: 'Print',
                        shareDeposit: 'Share Deposit',
                        fixedDeposit: 'Fixed Deposit',
                        profits: 'Profits',
                        shareWithdaw: 'Share Withdraw',
                        fdrWithdraw: 'FDR Withdraw',
                        expenses: 'Expenses',
                        savingsDeposit  : 'Savings Deposit',
                        dpsDeposit: 'DPS Deposit',    
                        extraIncome : 'Extra Income',
                        savingsWithdraw: 'Savings Withdraw',
                        dpsWithdraw: 'DPS Withdraw ',
                        paymentOfSalary: 'Payment Of Salary',
                        loan: 'Loan (Disbursement)',
                        insuranceDeposit: 'Insurance Deposit',
                        bankDeposit : 'Bank Deposit',
                        loanCollection: 'Loan Collection',
                        insuranceWithdraw : 'Insurance Withdraw',
                        bankWithdraw  : 'Bank Withdraw',
                    },
                    CollectionSheet: {
                        collectionSheet: 'Collection Sheet',
                        print: 'Print',
                    },
                    MessageReports: {
                        messageReports: 'Message Reports',
                        messageList: 'Message List',
                        notFound: 'No messages found!',
                        search: 'Search',
                    },
                },
                Accounts: {
                    AccountCommon: {
                        new: 'New',
                        searchCustomer: 'Search Customer',
                        customer: 'Customer',
                        notFound: 'No records found!',
                        accountNo: 'Account No',
                        balance: 'Balance',
                    },
                    PageTitles: {
                        share: 'Share',
                        savings: 'Savings',
                        fixedDeposit: 'Fixed Deposit',
                        dps: 'DPS',
                        loan: 'Loan',
                        insurance: 'Insurance',
                    }
                },
                Banking: {
                    banking: 'Banking',
                    newBank: 'New Bank',
                    bankName: 'Bank Name',
                    address: 'Address',
                    notFound: 'No data found!',
                },
                IncomeExpenditure: {
                    incomeExpenditure: 'Income - Expenditure',
                    sector: 'Sector',
                    addNew: 'Add New',
                    search: 'Search',
                },
                SalariesOfEmployees: {
                    salariesOfEmployees: 'Salaries of Employees',
                    paymentOfSalary: 'Payment Of Salary',
                    employee: 'Employee',
                    chooseOne: 'Choose One',
                    salary: 'Assigned Salary',
                    submit: 'Submit',
                    incomeExpenditure: 'Income - Expenditure',
                },
                ProfitDistribution: {
                    profitDistribution: 'Profit Distribution',
                    sorry: 'Sorry!',
                    notFound: 'You have no business partner, so profit sharing is not possible.',
                },
                BusinessSettings: {
                    businessSettings: 'Business Settings',
                    language: 'Language',
                    companyDetails: 'Company Details',
                    companyName: 'Company Name',
                    address: 'Address',
                    mobile: 'Mobile',
                    email: 'E-mail',
                    logo: 'Logo',
                    uploadPhoto: 'Upload Photo',
                    activities: 'Activities',
                    transactions: ' Transactions',
                    sms: ' SMS',
                    balanceSettings: 'Balance Settings',
                    mainBalance: 'Main Balance',
                    update: 'Update',
                },
                AdminProfile: {
                    profile: 'Profile',
                    profileSetUp: 'Profile Setup',
                    designation: 'Designation',
                    mobile: 'Mobile',
                    profileDetails: 'Profile Details',
                    name: 'Name',
                    father: 'Father',
                    mother: 'Mother',
                    birth: 'Birth Date',
                    gender: 'Gender',
                    email: 'E-Mail ',
                    prsentAddress: 'Present Address',
                    permanentAddress: 'Permanent Address',
                    registrationDate: 'Registration Date',
                    editProfile: 'Edit Profile',
                    male: 'Male',
                    female: 'Female',
                    save: 'Save',
                    close: 'Close',
                    ChangePassword: {
                        changePassword: 'Change Pasword',
                        oldPassword: 'Old Pasword',
                        newPassword: 'New Pasword',
                        save: 'Save',
                        close: 'Close',
                    },                 
                },
                Users: {
                    UserList: {
                        userList: 'User List', 
                        allUsers: 'All Users',
                        searchUser: "User's name",
                        notFound: 'No user found!',
                        search: 'Search',
                        mobile: 'Mobile',
                        joiningDate: 'Joining Date',
                    },
                },
                ErrorPage: {
                    errorText: 'Sorry! Your Requested page was not found!',
                    goHome: 'Go Home',
                },
                FormTexts: {
                    newCustomer: 'New Customer',
                    newUser: 'New User',
                    customerDetails: 'Customer Details',
                    nomineeDetails: 'Nominee Details',
                    userDetails: 'User Details',
                    name: 'Name',
                    dateOfBirth: 'Date Of Birth',
                    father: 'Father',
                    mother: 'Mother',
                    area: 'Area',
                    gender: 'Gender',
                    male: 'Male',
                    female: 'Female',
                    presentAddress: 'Present Address',
                    permanentAddress: 'Permanent Address',
                    identityType: 'Identity Type',
                    identityNumber: 'Identity Number',
                    accountNo: 'Account No',
                    mobile: 'Mobile',
                    password: 'Password',
                    email: 'E-mail',
                    registrationFee: 'Registration Fee',
                    registrationDate: 'Registration Date',
                    occupation: 'Occupation',
                    joiningDate: 'Joining Date',
                    designation: 'Designation',
                    uploadPhoto: 'Upload Photo',
                    save: 'Save',
                    typeHere: 'Type here...',
                    chooseOne: 'Choose One',
                    nid: 'NID',
                    birthCertificate: 'Birth Certificate',
                    manager: 'Manager',
                    fieldWorker: 'Field Worker',
                    shareHolder: 'Share Holder',
                    relation: 'Relation',
                },
                Profile: {
                    Customer: {
                        customerProfile: 'Customer Profile',
                        area: 'Area',
                        mobile: 'Mobile',
                        loan: 'Loan',
                        dps: 'DPS',
                        savings: 'Savings',
                        share: 'Share',
                        fdr: 'FDR',
                        fixedDeposit: 'Fixed Deposit',
                        insurance: 'Insurance',
                        edit: 'Edit',
                        changePassword: 'Change Password',
                        oldPassword: 'Old Password',
                        newPassword: 'New Password',
                        otherDocuments: 'Other Documents',
                        customerDocuments: 'Customer Documents',
                        nomineeDocuments: 'Nominee Documents',
                        save: 'Save',
                        close: 'Close',
                    },
                    User: {
                        userProfile: 'User Profile',
                        designation: 'Designation',
                        mobile: 'Mobile',
                        userDetails: 'User Details',
                        changePassword: 'Change Password',
                        editProfile: 'Edit Profile',
                        lastTransactions: 'Last Transactions',
                    },
                },
            }
        },
        bn: {
            translation: {
                Sidebar:{
                    dashboard: 'ড্যাশবোর্ড',
                    customers: 'গ্রাহক',
                    area: 'এলাকা',
                    addNew: 'যোগ করুন',
                    customerList: 'গ্রাহক তালিকা',
                    customerLaser: 'গ্রাহক লেজার',
                    reports: 'রিপোর্ট’স',
                    settlementReports: 'সেটেলমেন্টস্ রিপোর্ট’স',
                    collectionReports: 'আদায় রিপোর্ট’স',
                    collectionSheet: 'আদায় শিট',
                    messageReports: 'ম্যাসেজ রিপোর্ট’স',
                    accounts: 'অ্যাকাউন্ট’স',
                    share: 'শেয়ার',
                    savings: 'সঞ্চয়',
                    fixedDeposit: 'স্থায়ী আমানত',
                    dps: 'ডিপিএস',
                    loan: 'ঋণ',
                    insurance: 'বীমা',
                    banking: 'ব্যাংকিং',
                    incomeExpenditure: 'আয় - ব্যয়',
                    salariesOfEmployees: 'কর্মচারীদের বেতন',
                    profitDistribution: 'প্রফিট বন্টন ',
                    settings: 'সেটিংস',
                    businessSettings: 'বিজনেস সেটিংস',
                    profile: 'প্রোফাইল',
                    users: 'ইউজার’স',
                    userList: 'ইউজার তালিকা',
                    helpCenter: 'সহায়তা কেন্দ্র',
                    logout: 'লগ আউট',
                },
                Header: {
                    searchCustomer: 'গ্রাহক অনুসন্ধান',
                    addNew: 'যোগ করুন',
                    newLoan: 'নতুন ঋণ',
                    newDps: 'নতুন ডিপিএস',
                    newSavings: 'নতুন সঞ্চয়',
                },
                AdminDashboard: {
                    CompleteProfile: {
                        warning: 'সতর্কতা',
                        text: 'আপনার প্রোফাইলটি অসম্পূর্ণ, প্রোফাইলে আপনার ছবি সহ সমস্ত তথ্য জমা দিন।',
                        profileSetUp: 'প্রোফাইল সেটআপ',
                    },
                    Overview: {
                        overview: 'ওভারভিউ',
                        fullReport: 'রিপোর্ট’স',
                        availableBalance: 'উপলুব্ধ ব্যালেন্স',
                        businessCapital: 'ব্যবসার মূলধন', 
                        profits: 'লাভ', 
                        activeCustomers: 'সক্রিয় গ্রাহক',
                        totalCustomers: 'মোট গ্রাহক',
                        profile: 'প্রোফাইল',
                    },
                    LastTransactions: {
                        lastTransactions: 'সর্বশেষ লেনদেন',
                        seeAll: 'সবগুলো দেখুন',
                    },
                    TodaysReport: {
                        todaysReport: "আজকের রিপোর্ট",
                        collections: 'গ্রহণ',
                        distribution : 'বিতরণ',
                        expenses : 'খরচ',
                        profits : 'লাভ',
                        fineCollection : 'জরিমানা আদায়',
                        totalCash  : 'মোট ক্যাশ',
                        employeeReports: 'কর্মচারীদের রিপোর্ট’স',
                        smsReports: 'বার্তা রিপোর্ট’স',
                        notFound: 'কোন রেকর্ড পাওয়া যায়নি!',
                        seeMore: ' আরো দেখুন',
                    },
                },
                Customers: {
                    area: 'এলাকা',
                    newArea: 'নতুন এলাকা ',
                    editArea: 'এডিট এলাকা',
                    areaList: 'এলাকার তাালিকা',
                    areaName: 'এলাকার নাম',
                    search: 'অনুসন্ধান',
                    searchArea: 'এলাকা অনুসন্ধান',
                    customerList: 'গ্রাহক তাালিকা',
                    allCustomers: 'সকল গ্রাহক',
                    customerName: 'গ্রাহকের নাম',
                    mobile: 'ফোন',
                    accountNo: 'হিসাব নং',
                    customerLaser: 'গ্রাহক লেজার',
                    print: 'প্রিন্ট',
                    notFound: 'কোন তথ্য পাওয়া যায়নি!',
                    save: 'সেভ',
                    close: 'ক্লোজ',
                },
                Reports:{
                    SettlementReports: {
                        settlementReports: 'সেটেলমেন্ট রিপোর্ট’স',
                        ownersShare: 'মালিকদের শেয়ার',
                        customersShare: 'গ্রাহক শেয়ার',
                        customersSavings: 'গ্রাহক সঞ্চয়',
                        fixedDeposit: 'স্থায়ী আমানত',
                        customerDps: 'গ্রাহক ডিপিএস',
                        insurance : 'বীমা',
                        customerLoan : 'গ্রাহক ঋণ',
                        bankDeposit : 'ব্যাংক জমা',
                        totalProfit : 'লাভ সহ মোট ক্যাশ',
                        print: 'প্রিন্ট',
                    },
                    ColletionReports: {
                        collectionReports: 'আদায় রিপোর্টস',
                        transactionSummary: 'লেনদেনের সারাংশ',
                        transaction: 'লেনদেন',
                        collection: 'আদায়',
                        disbursement: 'বিতরণ',
                        search: 'অনুসন্ধান',
                        print: 'প্রিন্ট',
                        shareDeposit: 'শেয়ার জমা',
                        fixedDeposit: 'স্থায়ী আমানত',
                        profits: 'লাভ',
                        shareWithdaw: 'শেয়ার উত্তোলন',
                        fdrWithdraw: 'আমানত উত্তোলন',
                        expenses: 'খরচ',
                        savingsDeposit  : 'সঞ্চয় জমা',
                        dpsDeposit: 'ডিপিএস জমা',    
                        extraIncome : 'অন্যান্য আয়',
                        savingsWithdraw: 'সঞ্চয় উত্তোলন',
                        dpsWithdraw: 'ডিপিএস উত্তোলন',
                        paymentOfSalary: 'বেতন প্রদান',
                        loan: 'ঋণ বিতরণ',
                        insuranceDeposit: 'বীমা জমা',
                        bankDeposit : 'ব্যাংক জমা',
                        loanCollection: 'ঋণ আদায়',
                        insuranceWithdraw : 'বীমা উত্তোলন',
                        bankWithdraw  : 'ব্যাংক উত্তোলন',
                    },
                    CollectionSheet: {
                        collectionSheet: 'আদায় শীট',
                        print: 'প্রিন্ট',
                    },
                    MessageReports: {
                        messageReports: 'ম্যাসেজ রিপোর্ট’স',
                        messageList: 'বার্তা তালিকা',
                        notFound: 'কোন রেকর্ড পাওয়া যায়নি!',
                        search: 'অনুসন্ধান',
                        
                    },
                },
                Accounts: {
                    AccountCommon: {
                        new: 'নতুন',
                        searchCustomer: 'গ্রাহক খুঁজুন',
                        customer: 'গ্রাহক',
                        notFound: 'কোন রেকর্ড পাওয়া যায়নি!',
                        accountNo: 'হিসাব নং',
                        balance: 'ব্যালেন্স',
                    },
                    PageTitles: {
                        share: 'শেয়ার',
                        savings: 'সঞ্চয়',
                        fixedDeposit: 'স্থায়ী আমানত',
                        dps: 'ডিপিএস',
                        loan: 'ঋণ',
                        insurance: 'বীমা',
                    }
                },
                Banking: {
                    banking: 'ব্যাংকিং',
                    newBank: 'নতুন ব্যাংক',
                    bankName: 'ব্যাংকের নাম',
                    address: 'ঠিকানা',
                    notFound: 'কোন তথ্য নেই!',
                },
                IncomeExpenditure: {
                    incomeExpenditure: 'আয় - ব্যয় ',
                    sector: 'খাত',
                    addNew: 'যোগ করুন',
                    search: 'অনুসন্ধান',
                },
                SalariesOfEmployees: {
                    salariesOfEmployees: 'কর্মচারীদের বেতন',
                    paymentOfSalary: 'বেতন প্রদান',
                    employee: 'কর্মচারী',
                    chooseOne: 'সিলেক্ট করুন',
                    salary: 'নির্ধারিত বেতন',
                    submit: 'জমা দিন',
                    incomeExpenditure: 'আয় - ব্যয় ',
                },
                ProfitDistribution: {
                    profitDistribution: 'প্রফিট বন্টন',
                    sorry: 'দুঃখিত!',
                    notFound: 'আপনার কোন বিজনেস পার্টনার নেই, তাই প্রফিট বন্টন করা সম্ভব নয়!',
                },
                BusinessSettings: {
                    businessSettings: 'বিজনেস সেটিংস',
                    language: 'ভাষা',
                    companyDetails: 'প্রতিষ্ঠানের তথ্য',
                    companyName: 'প্রতিষ্ঠানের নাম',
                    address: 'ঠিকানা',
                    mobile: 'মোবাইল',
                    email: ' ই-মেইল',
                    logo: 'লোগো',
                    uploadPhoto: 'ছবি আপলোড',
                    activities: 'কার্যক্রম',
                    transactions: ' লেনদেন',
                    sms: 'এস.এম.এস',
                    balanceSettings: 'ব্যালেন্স সেটিংস',
                    mainBalance: 'মূল ব্যালেন্স',
                    update: 'আপডেট',
                },
                AdminProfile: {
                    profile: 'প্রোফাইল',
                    profileSetUp: 'প্রোফাইল সেটআপ',
                    designation: 'পদবী',
                    mobile: 'মোবাইল',
                    profileDetails: 'প্রোফাইলের তথ্য',
                    name: 'নাম',
                    father: 'পিতা',
                    mother: 'মাতা',
                    birth: 'জন্ম-তারিখ',
                    gender: 'লিঙ্গ',
                    email: 'ই-মেইল',
                    prsentAddress: 'বর্তমান ঠিকানা',
                    permanentAddress: 'স্থায়ী ঠিকানা',
                    registrationDate: 'নিবন্ধনের তারিখ',
                    editProfile: 'ইডিট প্রোফাইল',
                    male: 'পুরুষ',
                    female: 'মহিলা',
                    save: 'সেভ',
                    close: 'ক্লোজ',
                    ChangePassword: {
                        changePassword: 'পাসওয়ার্ড পরিবর্তন',
                        oldPassword: 'পুরাতন পাসওয়ার্ড',
                        newPassword: 'নতুন পাসওয়ার্ড',
                        save: 'সেভ',
                        close: 'ক্লোজ',
                    },
                },
                Users: {
                    UserList: {
                        userList: 'ইউজার তালিকা', 
                        allUser: 'সকল ইউজার',
                        searchUser: 'ইউজারের নাম',
                        search: 'অনুসন্ধান',
                        notFound: 'ইউজার পাওয়া যায়নি!',
                        mobile: 'মোবাইল',
                        joiningDate: 'যোগদানের তারিখ',
                    },
                },
                ErrorPage: {
                    errorText: 'দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি!',
                    goHome: 'হোম',
                },
                FormTexts: {
                    newCustomer: 'নতুন গ্রাহক',
                    newUser: 'নতুন ইউজার',
                    customerDetails: 'গ্রাহকের তথ্য',
                    userDetails: 'ইউজারের তথ্য',
                    nomineeDetails: 'নমিনীর তথ্য',
                    name: 'নাম',
                    dateOfBirth: 'জন্ম-তারিখ',
                    father: 'পিতা',
                    mother: ' মাতা',
                    area: 'এলাকা',
                    gender: 'লিঙ্গ',
                    male: 'পুরুষ',
                    female: 'মহিলা',
                    presentAddress: 'বর্তমান ঠিকানা',
                    permanentAddress: 'স্থায়ী ঠিকানা',
                    identityType: 'পরিচয়পত্রের ধরন',
                    identityNumber: 'পরিচয়পত্র নাম্বার',
                    accountNo: 'হিসাব নং',
                    mobile: 'মোবাইল',
                    password: 'পাসওয়ার্ড',
                    email: 'ই-মেইল',
                    registrationFee: 'নিবন্ধন ফি',
                    registrationDate: 'নিবন্ধনের তারিখ',
                    occupation: 'পেশা',
                    joiningDate: 'যোগদানের তারিখ',
                    designation: 'পদবী',
                    uploadPhoto: 'ছবি আপলোড',
                    save: 'সেভ',
                    typeHere: 'এখানে লিখুন...',
                    chooseOne: 'সিলেক্ট করুন',
                    nid: 'এনআইডি',
                    birthCertificate: 'জন্ম-সনদ',
                    manager: 'ম্যানেজার',
                    fieldWorker: 'মাঠকর্মী',
                    shareHolder: 'বিনিয়োগকারী',
                    relation: 'সম্পর্ক',
                },
                Profile: {
                    Customer: {
                        customerProfile: 'গ্রাহক প্রোফাইল',
                        area: 'এলাকা',
                        mobile: 'মোবাইল',
                        loan: 'ঋণ',
                        dps: 'ডিপিএস',
                        savings: 'সঞ্চয়',
                        share: 'শেয়ার',
                        fdr: 'এফডিআর',
                        fixedDeposit: 'স্থায়ী আমানত',
                        insurance: 'বীমা',
                        edit: 'ইডিট',
                        changePassword: 'পাসওয়ার্ড পরিবর্তন',
                        oldPassword: 'পুরাতন পাসওয়ার্ড',
                        newPassword: 'নতুন পাসওয়ার্ড',
                        otherDocuments: 'অন্যান্য নথিপত্র',
                        customerDocuments: 'গ্রাহকের ডকুমেন্ট ফাইল',
                        nomineeDocuments: ' নমিনির ডকুমেন্ট ফাইল',
                        save: 'সেভ',
                        close: 'ক্লোজ',
                    },
                    User: {
                        userProfile: 'ইউজার প্রোফাইল',
                        designation: 'পদবী',
                        mobile: 'মোবাইল',
                        userDetails: 'ইউজারের তথ্য',
                        changePassword: 'পাসওয়ার্ড পরিবর্তন',
                        editProfile: 'ইডিট প্রোফাইল',
                        lastTransactions: 'সর্বশেষ লেনদেন',
                    },
                },
            }
        }
    }
})