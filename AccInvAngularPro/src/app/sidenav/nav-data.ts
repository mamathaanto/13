import { inavbardata } from "./helper";

export const navbardata:inavbardata[]=[
    {
        routeLink:'dashboard',
        icon:'fa-solid fa-house',
        label:'Dashboard',
        
    },
    {
        routeLink:'administration',
        icon:'fa-sharp fa-solid fa-user',
        label:'Administration',
        items:[{
            routeLink:'administration/companyregistration',
            label:'Company registration '
        },
        {
            routeLink:'administration/branch',
            label:'Branch'
        },
        {
            routeLink:'administration/usermanagement',
            label:'User management '
        },
        {
            routeLink:'administration/settings',
            label:'Settings '
        },]

    },
    

    {
        routeLink:'inventory',
        icon:'fa-sharp fa-solid fa-truck-moving',
        label:'Inventory',
        items:[
            {
            routeLink:'inventory/in-masters',
            label:'Masters',
            items:[
                {
                routeLink:'inventory/in-ma-material',
                label:'Material',
                items:[
                    {
                        routeLink:'inventory/in-ma-mat-category',
                        label:'Category'
                    },
                    {
                        routeLink:'inventory/show-tax',
                        label:'Tax'
                    },
                    {
                        routeLink:'inventory/in-ma-mat-unit',
                        label:'Unit'
                    },
                    {
                        routeLink:'inventory/in-ma-mat-itemmaster',
                        label:'ItemMaster'
                    }
                    ]
                },
                {routeLink:'inventory/in-ma-customer',
                label:'Customer'},
                {routeLink:'inventory/in-ma-vendor',
                label:'Vendor'},
                {routeLink:'inventory/in-ma-state',
                label:'State'}
            ]
        },
        {
            routeLink:'inventory/in-transactions',
            label:'Transactions',
            items:[
                {
                    routeLink:'inventory/in-tran-purchase',
                    label:'Purchase',
                    items:[
                        {
                            routeLink:'inventory/in-tran-pur-purchaseorder',
                            label:'PurchaseOrder' 
                        },
                        {
                            routeLink:'inventory/in-tran-pur-grn',
                            label:'GoodsReceivedNote(GRN)' 
                        },
                        {
                            routeLink:'inventory/in-tran-pur-grv',
                            label:'GoodsReceivedVoucher(GRV)' 
                        },
                        {
                            routeLink:'inventory/in-tran-pur-purchasereturn',
                            label:'PurchaseReturn(DebitNote)' 
                        },
                    ]
                },
                {
                    routeLink:'inventory/in-tran-sales',
                    label:'Sales',
                    items:[
                        {
                            routeLink:'inventory/in-tran-sal-quotation',
                             label:'Quotation' 
                        },
                        {
                            routeLink:'inventory/in-tran-sal-salesorder',
                             label:'SalesOrder' 
                        },
                        {
                            routeLink:'inventory/in-tran-sal-deliverynote',
                             label:'DeliveryNote' 
                        },
                        {
                            routeLink:'inventory/in-tran-sal-salesbilling',
                             label:'SalesBilling' 
                        },
                        {
                            routeLink:'inventory/in-tran-sal-salesreturn',
                             label:'SalesReturn' 
                        },
                        {
                            routeLink:'inventory/in-tran-sal-secondssales',
                             label:'Secondssales' 
                        },
                        
                    ]
                },
                {
                    routeLink:'inventory/in-tran-offerbundling',
                    label:'OfferBundling',
                    items:[
                        {
                            routeLink:'inventory/in-tran-off-createbundle',
                            label:'CreateBundle'
                        },
                        {
                            routeLink:'inventory/in-tran-off-bundling',
                            label:'Bundling'
                        },
                        {
                            routeLink:'inventory/in-tran-off-dismantlebundle',
                            label:'DismantleBundle'
                        },
                    ]
                },
                {
                    routeLink:'inventory/in-tran-inventory',
                    label:'Inventory',
                    items:[
                        {
                        routeLink:'inventory/in-tran-in-stocktransfer',
                        label:'StockTransfer',
                        },
                        {
                            routeLink:'inventory/in-tran-in-dsw',
                            label:'DamageStockWriteOff',
                        },
                        {
                                routeLink:'inventory/in-tran-in-stockadjustment',
                                label:'StockAdjustment',
                        },
                    ]
                },
            ]
        },
        {
            routeLink:'inventory/in-reports',
            label:'Reports',
            items:[
                {
                    routeLink:'inventory/in-rep-purchase',
                    label:'Purchase' ,
                    items:[
                        {
                            routeLink:'inventory/in-rep-pur-purchaseorder',
                            label:'PurchaseOrder' 
                        },
                        {
                            routeLink:'inventory/in-rep-pur-grn',
                            label:'GRN' 
                        },
                        {
                            routeLink:'inventory/in-rep-pur-purchasereturn',
                            label:'PurchaseReturn' 
                        },

                ]
                },
                {
                    routeLink:'inventory/in-rep-sales',
                    label:'Sales' ,
                    items:[
                        {
                            routeLink:'inventory/in-rep-sal-salesorder',
                            label:'SalesOrder'  
                        },
                        {
                            routeLink:'inventory/in-rep-sal-deliverynote',
                            label:'DeliveryNote'  
                        },
                        {
                            routeLink:'inventory/in-rep-sal-sales',
                            label:'Sales'  
                        },
                        {
                            routeLink:'inventory/in-rep-sal-salesreturn',
                            label:'SalesReturn'  
                        },
                        {
                            routeLink:'inventory/in-rep-sal-secondssale',
                            label:'SecondsSale'  
                        },

                    ]
                },
                {
                    routeLink:'inventory/in-rep-bundling',
                    label:'Bundling' ,
                    items:[
                        {
                            routeLink:'inventory/in-rep-bun-bundleitems',
                            label:'BundleItems' , 
                        },
                        {
                            routeLink:'inventory/in-rep-bun-bundlesales',
                            label:'BundleSales' , 
                        },
                        {
                            routeLink:'inventory/in-rep-bun-analysis',
                            label:'Analysis' , 
                        },
                    ]
                },
                {
                    routeLink:'inventory/in-rep-inventory',
                    label:'Inventory' ,
                    items:[
                        {
                            routeLink:'inventory/in-rep-in-stockreport',
                            label:'StockReport' 
                        },
                        {
                            routeLink:'inventory/in-rep-in-stockregister',
                            label:'StockRegister' 
                        },
                        {
                            routeLink:'inventory/in-rep-in-sma',
                            label:'StockMovingAnalysis' 
                        },
                        {
                            routeLink:'inventory/in-rep-in-damagestock',
                            label:'DamageStock' 
                        },
                        {
                            routeLink:'inventory/in-rep-in-stocktransfer',
                            label:'StockTransfer' 
                        },
                        {
                            routeLink:'inventory/in-rep-in-stockadjustment',
                            label:'StockAdjustment' 
                        },
                        {
                            routeLink:'inventory/in-rep-in-reorderlist',
                            label:'ReorderList' 
                        },
                        {
                            routeLink:'inventory/in-rep-in-iar',
                            label:'InventoryAgeingReport' 
                        },
                        {
                            routeLink:'inventory/in-rep-in-expireditems',
                            label:'ExpiredItems' 
                        },

                    ]
                },
            ]
        }
    ]

    },
    {
        routeLink:'accounts',
        icon:'fa-sharp fa-solid fa-wallet',
        label:'Accounts',
        items:[
            {
                routeLink:'accounts/ac-masters',
                label:'Masters' ,
                items:[
                   
                    {
                        routeLink:'accounts/ac-ma-chartofaccount',
                        label:'ChartofAccount'  
                    }
                ]
            },
            {
                routeLink:'accounts/ac-transactions',
                label:'Transactions' ,
                items:[
                    {
                        routeLink:'accounts/ac-tran-paymentsvoucher',
                        label:'PaymentsVoucher' 
                    },
                    {
                        routeLink:'accounts/ac-tran-receiptsvoucher',
                        label:'ReceiptsVoucher' 
                    },
                    {
                        routeLink:'accounts/ac-tran-pettycashvoucher',
                        label:'PettyCashVoucher' 
                    },
                    {
                        routeLink:'accounts/ac-tran-journalentry',
                        label:'JournalEntry(JV)' 
                    },
                    {
                        routeLink:'accounts/ac-tran-contraentry',
                        label:'ContraEntry' 
                    },
                    {
                        routeLink:'accounts/ac-tran-debitnote',
                        label:'DebitNote' 
                    },
                    {
                        routeLink:'accountsac-tran/creditnote',
                        label:'CreditNote' 
                    },
                    {
                        routeLink:'accounts/ac-tran-bankreconciliation',
                        label:'BankReconciliation' 
                    },
                    {
                        routeLink:'accounts/ac-tran-pdcstatusupdation',
                        label:'PDCStatusUpdation' 
                    },
                    {
                        routeLink:'accounts/ac-tran-receiptpaymentallocation',
                        label:'Receiptv/sPaymentAllocation' 
                    },

                ]
            },
            {
                routeLink:'accounts/ac-reports',
                label:'Reports' ,
                items:[
                    {
                    routeLink:'accounts/ac-reports',
                    label:'Reports' , 
                    },
                    {
                        routeLink:'accounts/ac-rep-bankbook',
                        label:'BankBook' , 
                    },
                    {
                        routeLink:'accounts/ac-rep-cashbook',
                        label:'CashBook' , 
                        },
                    {
                            routeLink:'accounts/ac-rep-pettycash',
                            label:'PettyCash' , 
                    },
                            
                    {
                         routeLink:'accounts/ac-repledgers',
                        label:'Ledgers' , 
                    },
                    {
                            routeLink:'accounts/ac-rep-incomexpenses',
                            label:'Income/Expenses' , 
                    },
                    {
                         routeLink:'accounts/ac-rep-trialbalance',
                        label:'TrialBalance/TB(DateRange)' , 
                    },
                    {
                        routeLink:'accounts/ac-rep-incomestatement',
                        label:'IncomeStatement' , 
                    },
                    {
                        routeLink:'accounts/ac-rep-profitloss',
                        label:'Profit&Loss' , 
                    },
                                                
                    {
                    routeLink:'accounts/ac-rep-balancesheet',
                    label:'BalanceSheet' , 
                    },
                    {
                    routeLink:'accounts/ac-rep-customersupplierar',
                    label:'Customer/SupplierAgeingReports' , 
                    },
            ]
            },
            {
                routeLink:'accounts/ac-utilities',
                label:'Utilities',
                items:[
                    {
                        routeLink:'accounts/ac-uti-apv',
                        label:'AccountsPostingVerification' 
                    },
                    {
                        routeLink:'accounts/ac-uti-stockupdate',
                        label:'StockUpdate' 
                    },
                    {
                        routeLink:'accounts/ac-uti-yearendprocess',
                        label:'YearEndProcess' 
                    },
                    {
                        routeLink:'accounts/ac-uti-pybf',
                        label:'PreviousYearBalanceForwarding' 
                    },
                    {
                        routeLink:'accounts/ac-uti-databackup',
                        label:'DataBackup' 
                    },
                    {
                        routeLink:'accounts/ac-uti-sob',
                        label:'StockOpeningBalance' 
                    },
                    {
                        routeLink:'accounts/ac-uti-aob',
                        label:'AccountsOpeningBalance' 
                    },

                ] 
            },

        ]

    },
    {
        routeLink:'tools',
        icon:'fa-solid fa-screwdriver-wrench',
        label:'Tools'
        
    }
    
];