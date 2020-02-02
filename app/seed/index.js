/* Module dependencies. */
/* ------------------------------------------------ */
const log = pygmy.util.logger
const websiteTitle = pygmy.config.app.websiteTitle
/* ------------------------------------------------ */

/* ------------------------------------------------ */

/* Seed here */
/* ------------------------------------------------ */

let output = {
    seedPages: () => {
        // setup data
        let pages = [
            {
                name: 'home',
                templatePath: 'home.ejs',
                title: websiteTitle,
                description:
                    'Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'Seven Oaks Modular Ltd',
                content: {
                    header: {
                        backgroundImage: '/resources/img/a07.jpg',
                        video: '/resources/video/intro.mp4'
                    },
                    headerTitle: {
                        text: 'SO Modular'
                    },
                    headerSubtitle: {
                        text: 'SO Sustainable, SO Innovative'
                    }
                }
            },
            {
                name: 'benefits',
                templatePath: 'benefits.ejs',
                title: 'Benefits of Timber Frame | ' + websiteTitle,
                description:
                    'Benefits of Timber Frame | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'Benefits of Timber Frame, Seven Oaks Modular Ltd',
                content: {
                    header: {
                        backgroundImage:
                            '/resources/img/benefits/benefits_background.jpg'
                    },
                    headerTitle: {
                        text: 'Why Timber Frame?'
                    },
                    headerSubtitle: {
                        // text: 'Structural Timber is used in 70% of homes constructed in the world, but what benefits does timber frame have over traditional construction methods?'
                        text: '70% of homes constructed in the world'
                    }
                }
            },
            {
                name: 'sustainability',
                templatePath: 'sustainability.ejs',
                title: 'Sustainability | ' + websiteTitle,
                description:
                    'Sustainability | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'Sustainability, Seven Oaks Modular Ltd',
                content: {
                    header: {
                        backgroundImage:
                            '/resources/img/sustainability/trees.jpg'
                    },
                    headerTitle: {
                        text: 'Sustainability'
                    },
                    headerSubtitle: {
                        // text: 'Structural Timber is used in 70% of homes constructed in the world, but what benefits does timber frame have over traditional construction methods?'
                        text: 'Maintaining change in a balanced environment'
                    }
                }
            },
            {
                name: 'about',
                templatePath: 'about.ejs',
                title: 'About Us | ' + websiteTitle,
                description:
                    'About Us | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'About Us, Seven Oaks Modular Ltd',
                content: {
                    header: {
                        backgroundImage:
                            '/resources/img/about/about_background.jpg'
                    },
                    headerTitle: {
                        text: 'Meet our family'
                    },
                    headerSubtitle: {
                        text: 'Established in 1996'
                    },
                    text: {
                        text:
                            '<p>SO Modular Ltd are a rapidly expanding timber frame manufacture with our headquarters based in South West Wales. Our highly experienced, growing workforce can ‘Design, Supply and Erect’ your timber frame – home, apartment block, retail outlet or education establishment, on time, on budget and of the highest quality standard.</p><p>Established in 1996 by our CEO Jonathan Hale, SO started as a purpose made joinery. We now design, manufacture and innovate timber frame components for large national homebuilders, contractors and housing associations across the United Kingdom.</p><p>With the construction industry constantly changing to incorporate more environmentally friendly practices, the sustainability of products and more time and cost reducing methods, here at SO we are always researching, developing and adapting to meet these demands. </p><p>We continue to be at the forefront of innovative and creative solutions within the construction industry, pushing boundaries and developing products that enable us to boost efficiency, sustainability and cost-effectiveness across a diverse range of construction projects. Our current research and development projects consist of manufacturing carbon-neutral but affordable timber-frame homes; homes that are so thermally efficient, with U-values so low, they require minimal heating and cooling, potentially completely removing the need for a central heating system at all. </p><p>With timber frame fast becoming the norm across the U.K. SO Modular adapts and grows with the industry. What sets us apart from the rest? As pioneers and innovators in our industry we can supply eco-friendly, sustainable, low carbon buildings at competitive rates. Our open and closed panels can be purpose built to your requirements. Our Triso-Warm initiative with blown insulation will reach the U-Value levels beyond your requirements.</p>'
                    },
                    who: [
                        {
                            image: '/resources/aboutus/jh.png',
                            name: 'Jonathan Hale',
                            position: 'Chairman',
                            text:
                                'I’m the C.E.O and founder of SO Modular Ltd. Our team and the foundations this company is built upon is the reason for our continued growth and success.'
                        },
                        {
                            image: '/resources/aboutus/ch.png',
                            name: 'Charlotte Hale',
                            position: 'Company Director',
                            text:
                                'Managing SO Modular’s expanding workforce is a rewarding task. I am excited about the future of the company and the current plan’s for our continued growth.'
                        },
                        {
                            image: '/resources/aboutus/cb.png',
                            name: 'Ceri Brown',
                            position: 'Financial Director',
                            text:
                                'Being a Finance Director can be challenging. At SO Modular I’ve implemented many processes to make sure we’re always hitting targets. I’m looking forward to the future expansion of SOM!'
                        },
                        {
                            image: '/resources/aboutus/dh.png',
                            name: 'David Harrhy',
                            position: 'Managing Director',
                            text:
                                'I thrive on hard work, dedication and discipline. Driving the company forward in a competitive market keeps me focused and driven.'
                        },
                        {
                            image: '/resources/aboutus/wr.png',
                            name: 'Warren Rowlands',
                            position: 'Senior Timber Frame Designer',
                            text:
                                'I oversee the design department at SO Modular. Our team is always looking at new innovations within the timber frame industry, keeping us ahead of the game.'
                        },
                        {
                            image: '/resources/aboutus/jc.png',
                            name: 'Joshua Collins',
                            position: 'Senior Estimator',
                            text:
                                'Innovation with in our department has seen the implementation of a custom written estimating application unique to ourselves. This allows us to be more accurate within the quotation process.'
                        },
                        {
                            image: '/resources/aboutus/jt.png',
                            name: 'Julian Thomas',
                            position: 'Factory Manager',
                            text:
                                'I’m a self confessed control freak. Managing the factory for me is a 24 hour job. As we works shifts to deal with the continued expansion I can monitor everything remotely to make sure everything is going to plan.'
                        },
                        {
                            image: '/resources/aboutus/im.png',
                            name: 'Ian Mellor',
                            position: 'Quantity surveyor',
                            text:
                                'I monitor the contract’s at SO Modular. I like to ensure all work is completed within budget and on time. Any variations to cost is analysed and accounted for on future projects.'
                        }
                    ]
                }
            },
            {
                name: 'cases',
                templatePath: 'cases.ejs',
                title: 'Case Studies | ' + websiteTitle,
                description:
                    'Case Studies | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'Case Studies, Seven Oaks Modular Ltd',
                content: {
                    header: {
                        backgroundImage:
                            '/resources/img/cases/cases_background.jpg'
                    },
                    headerTitle: {
                        text: 'Working with you'
                    },
                    headerSubtitle: {
                        text: 'To build the future'
                    }
                }
            },
            {
                name: 'case',
                templatePath: 'cases.ejs',
                title: 'Case Studies | Seven Oaks Modular Ltd',
                description:
                    'Case Studies | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'Case Studies, Seven Oaks Modular Ltd'
            },
            {
                name: 'news',
                templatePath: 'news.ejs',
                title: 'News | Seven Oaks Modular Ltd',
                description:
                    'News | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'News, Seven Oaks Modular Ltd',
                content: {
                    header: {
                        backgroundImage: '/resources/news/news_background.jpg'
                    },
                    headerTitle: {
                        text: 'Latest News'
                    },
                    headerSubtitle: {
                        text: 'From SO'
                    }
                }
            },
            {
                name: 'newsItem',
                templatePath: 'newsItem.ejs',
                title: 'News | Seven Oaks Modular Ltd',
                description:
                    'News | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'News, Seven Oaks Modular Ltd'
            },
            {
                name: 'products',
                templatePath: 'products.ejs',
                title: 'Products | Seven Oaks Modular Ltd',
                description:
                    'Products | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'Products, Seven Oaks Modular Ltd',
                content: {
                    header: {
                        backgroundImage:
                            '/resources/img/products/products_background.png'
                    },
                    headerTitle: {
                        text: 'Our Range of Products'
                    },
                    headerSubtitle: {
                        text: 'From Start to Finish'
                    }
                }
            },
            {
                name: 'productGroup',
                templatePath: 'productGroup.ejs',
                title: 'Products | ' + websiteTitle,
                description:
                    'Products | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'Products, Seven Oaks Modular Ltd'
            },
            {
                name: 'productsSub',
                templatePath: 'productSub.ejs',
                title: 'Products | ' + websiteTitle,
                description:
                    'Products | Seven Oaks Modular Ltd | Timber Frame Specialists | Hale Group',
                keywords: 'Products, Seven Oaks Modular Ltd'
            },
            {
                name: 'jobs',
                templatePath: 'jobs.ejs',
                title: 'Jobs | ' + websiteTitle,
                description: 'Jobs available at ' + websiteTitle,
                keywords: websiteTitle + ',jobs',
                content: {
                    header: {
                        backgroundImage: '/resources/jobs/jobs_background.jpg'
                    },
                    headerTitle: {
                        text: "We're Hiring"
                    },
                    headerSubtitle: {
                        text: 'Jobs @ SOM'
                    }
                }
            }
        ]

        //Seed new users
        pages.forEach(seed => {
            pygmy.pages.amend(seed, true)
        })
    },
    seedProducts: () => {
        // setup data
        let products = [
            {
                name: 'Timber Frame',
                order: 2,
                iconPath: '/resources/img/products/tf.png',
                mainImagePath:
                    '/resources/img/products/mainImages/timberframe.jpg',
                content: {
                    summary:
                        '<p>Our prefabricated timber frame panels provide a comprehensive solution to modern house building - from the traditional open panel, to the ‘virtually-finished’ closed panel or the modern, complete envelope Triso-warm panel option.  We manufacture to suit your design requirements and specifications.</p>'
                },
                subProducts: [
                    {
                        name: 'Open Panels',
                        order: 2,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/openpanel.jpg',
                        content: {
                            summary:
                                '<p>As an industry standard pre-fabricated wall panel option, we manufacture a variety of traditional timber frame open panel solutions. Factory fitted with your choice of sheathing board and breather membranes on one side, the other side is left open to allow for your choice of insulation and boarding and for easier access for service trades. Construction with timber frame panels has the potential to see a fully weathertight structure erected within one day - once windows and doors have been installed - regardless of weather. This allows for follow-on trades to commence both interior and exterior works simultaneously, increasing build efficacy and reducing build time.</p>',
                            keyFacts: [
                                'U-values ranging from 0.26 down to 0.15 W/m2K',
                                'Timber frame available in 63/89/140mm sizes',
                                'Breather membrane: Green – stops interstitial condensation; Sliver – enhances thermal properties',
                                'Ply board or OSB sheathing option',
                                'PIR thermal insulation board option',
                                'Quick to install; reduces labour costs',
                                'Easy access for service trades',
                                'Fully factory manufactured'
                            ]
                        }
                    },
                    {
                        name: 'Closed Panels',
                        order: 3,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/closedpanel.jpg',
                        content: {
                            summary:
                                '<p>As an alternative to our open-panels, we also offer a closed panel option. Manufactured using the same principles as the open panels but with the added features of factory-fitted insulation, service battens and closed on the internal face with OSB sheathing. The service voids within these panels allow for easy access for plumbing and electrical cabling and have the added effect of creating an extra layer of improved thermal performance. Being a virtually-finished wall panel solution, the trend toward using this type of panel is rapidly increasing across the house-building industry with major incentive being the reduction in on-site build-time, cost-effectiveness and a reduction in on-site waste. More build-advanced closed panels can come with options of factory-fitted services and pre-fitted windows and doors.</p>',
                            keyFacts: [
                                'U-values from 0.25 down to 0.10 W/m2K',
                                'Timber frame available in 63/89/140mm sizes',
                                'Breather membrane: Green – stops interstitial condensation; Sliver – enhances thermal properties',
                                'Ply board or OSB sheathing option',
                                'PIR thermal insulation board option',
                                'Quick to install; reduces labour costs',
                                'Easy access for service trades',
                                'Fully factory manufactured, precision engineered, strong and durable'
                            ]
                        }
                    },
                    {
                        name: 'Spandrel & Gable Panels',
                        order: 4,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/gable-spandrel.jpg',
                        content: {
                            summary:
                                '<p>Our factory manufactured spandrel and gable panels are a cost-effective and flexible option to fit alongside our roof trusses. Used as separating walls or as external gable end panels, they are prefabricated to the profile of the roof to meet the exact specifications of the build project. This, along with the use of Fermacell sheathing on the external face of the panels, provides greater performance as a sound and fire barrier and satisfies ‘Robust Details’ and building regulations. </p><p>Unlike traditional masonry methods, the installation of these panels is not weather restrictive, and no curing time is needed before the roof is installed, saving valuable construction time. The easy installation of spandrel panels reduces the need for prolonged scaffold use or multiple trades, as they don’t require any complex anchorage methods. This reduces the Health and Safety risks to the trades as there is no requirement to work at height for prolonged periods of time. Which in turn reduces build costs and frees up trades for the continuation of other construction works while the roof frame is being installed.</p>',
                            keyFacts: [
                                'Cost-effective and time-reducing',
                                'No requirement for multiple trades during installation',
                                'Fully-factory manufactured to necessary requirements',
                                'Fully boarded with Fermacell sheathing for effective sound proofing and fire proofing to 60 minutes, reducing the spread of fire between residential settings',
                                'Fermacell also negates the need for plastic covering to protect against the elements during installation'
                            ]
                        }
                    },
                    {
                        name: 'Trisowarm',
                        order: 1,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/trisowarm.png',
                        content: {
                            summary:
                                '<p>Developed by and exclusive to Seven Oaks Modular, this is a fully insulated, environmentally friendly traditional timber-frame wall panel. Triso-warm is extremely thermally efficient therefore negates the need for conventional central heating. It’s non-restrictive in terms of design, providing a complete building envelope – walls, floors, ceiling and roofs. Completely factory manufactured, this BBA approved product comprises of specifically engineered timber frame panels injected with PUR highly insulated foam. This foam expands and adheres to the inside of the panel creating an airtight seal achieving U-values as low as 0.14 W/m2k, Y-values as low as 0.04 W/m2k and air tightness levels as low as 1m33/2mh @50pa.</p>',
                            keyFacts: [
                                'Versatile panel solution',
                                'Fully-factory manufactured',
                                'Excellent environmental and thermal efficiency credentials',
                                'Excellent sustainability & environmental credentials',
                                'Can negate the need for conventional ‘central’ heating',
                                'Improved ‘factory manufactured’ quality',
                                'Reduces overall construction time',
                                'Overcomes skills shortage',
                                'Less on-site materials handling, storage & waste',
                                'Large panels up to 7m long can be accommodated',
                                'Not restrictive on building designs',
                                'Compliance with latest planning requirements',
                                '‘U’ values as low as 0.14W/m2K',
                                '‘Y’ values as low as 0.04W/m2K',
                                'Air permeability reduced to 1 m3/m2h@50pa',
                                'Excellent acoustic performance',
                                'Fire tested to 43 minutes in accordance with BS 476: Part 21:1987'
                            ],
                            main: '<p></p>'
                        }
                    }
                ]
            },
            {
                name: 'Roofs',
                order: 3,
                iconPath: '/resources/img/products/roof.png',
                mainImagePath: '/resources/img/products/mainImages/roof.jpg',
                content: {
                    summary:
                        '<p>We offer a variety of roofing options, pre-engineered and factory-manufactured for easy and quick installation on-site. Our roof trusses, roof cassettes and attic room options are flexible and versatile and not limited to design restrictions.  With an in-house CAD design team, we pre-fabricate to customer specification, provide structural calculations and ancillary schedules to ensure you have everything you need and cover the drawing stage and feasibility studies on request.</p>'
                },
                subProducts: [
                    {
                        name: 'Roof Trusses',
                        order: 1,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/rooftruss.jpg',
                        content: {
                            summary:
                                '<p>Webbed roof trusses are the most typically used form of framing in the housebuilding industry. The speed of manufacture and ease of installation (when compared to traditional building methods) provides a time-reducing and cost-effective solution. This allows for greater design flexibility – from simple, standard roof structures, to more architecturally stylized design concepts. A practical and economical roofing solution that uses less timber, requires no on-site storage facility or specific carpentry area and releases contractors to enable work to continue in other build areas. </p><p>With in-house CAD designers, we tackle all structural layouts, from the simple garage roof to more intricate, complex restoration, closely imitating traditional joinery methods and construction techniques. We provide structural calculations and ancillary schedules, ensuring you have everything you need. We cover the drawing stage and feasibility studies on request. </p>',
                            keyFacts: [
                                'Cost effective and practical',
                                'Quick and easy to install',
                                'Bespoke, custom designed',
                                'Suitable for many types of roof covering',
                                'Flexible to both simple and complex designs',
                                'Environmentally friendly, economical and sustainable resource material',
                                'No on-site storage required'
                            ]
                        }
                    },
                    {
                        name: 'Roof Cassettes',
                        order: 2,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/roofCassette.jpg',
                        content: {
                            summary:
                                '<p>Our pre-engineered roof cassettes combine the innovative manufacturing methods and design of our wall panels and floor cassettes to create an easy to install and cost-effective roofing solution. Using either I-joists or Posi-joists and with the option of being either open or closed panels, our roof cassettes can span large distances but still maintain low U-values and thermal efficiency. They provide a versatile roofing alternative with the flexibility to suit the bespoke requirements of the build project. Fully prefabricated in our factory, these ready-to-install modular panels are come ready-battened and sheathed with a protective waterproof membrane. This helps to reduce air leakage and negate the need for thermal bridging, allowing installation to continue with no adverse weather restrictions, providing a fully water-tight roof ready to receive the roof covering. Installed through craning, fewer site staff are required to work at height eliminating the need for prolonged scaffolding use thus reducing on-site Health and Safety risks and overall build costs. </p>',
                            keyFacts: [
                                'Cost-effective and quick to install',
                                'Fully factory manufactured',
                                'Versatile to suit all roof types – Mono pitched, flat roofs, room in roof',
                                'Utilises whole loft space to allow for larger living area in the roof',
                                'Reduced air leakage and thermal bridging',
                                'Low U values',
                                'Enhanced energy performance',
                                'Fully watertight'
                            ]
                        }
                    },
                    {
                        name: 'Attic Rooms',
                        order: 3,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/atticroom.jpg',
                        content: {
                            summary:
                                '<p>As our roof trusses are so versatile, they can be fully-engineered to be attic-room-ready to provide the option of creating an additional room in the roof. The popularity of attic rooms is increasing every year; house and land prices are increasing, meaning homeowners are looking for other alternatives in order to create more living space. A room-in-the-roof allows an otherwise empty void to become a functional, usable room. Manufactured with a slightly steeper pitch, increased timber sections, a lower member which provides a floor platform and additional room loadings, our attic room trusses provide the potential for expansion without changing the footprint of the structure or the need for extensive building work. The benefits of such are that the trusses can span onto external walls allowing for more flexibility in roof and floor layouts. There are no restrictions in terms of design. Intricate roof layouts - taking into consideration dormers, roof windows and staircases - are as feasible as straightforward simple roof designs to optimize space and functionality of the dwelling.</p>',
                            keyFacts: [
                                'Complete roof structure; once fully erected, internal work can commence',
                                'Increased living space without changing structural footprint',
                                'No restrictions on lower floor layouts as trusses span on to external wall',
                                'Economical, cost-effective and reduces build time',
                                'Flexible to both simple and complex designs; custom designed by in-house CAD designers',
                                'Reduces labour costs'
                            ]
                        }
                    }
                ]
            },
            {
                name: 'Floors',
                order: 4,
                iconPath: '/resources/img/products/flooring2.jpg',
                mainImagePath:
                    '/resources/img/products/mainImages/flooring.jpg',
                content: {
                    summary:
                        '<p>We manufacture both I-joists and Posi-joists for use in our modular floor cassettes. With in-house CAD designers, we pre-fabricate to customer specification. We provide structural calculations and ancillary schedules, ensuring you have everything you need. We cover the drawing stage and feasibility studies on request.</p>'
                },
                subProducts: [
                    {
                        name: 'Posi-Joists',
                        order: 1,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/posi_joist.jpg',
                        content: {
                            summary:
                                '<p>Posi-joists, or metal web joists, combine lightweight timber with the strength of steel webbing to create a lightweight but strong flooring joist that is suitable for both floor and roof use. Unlike solid floor joists, Posi-joists can span much greater distances allowing for greater flexibility in building design. They are quick and easy to install, can be manufactured in a range of depths and are suitable for use in both floors and roofs. The webbed metal structure allows easier and hassle-free access for cabling and plumbing services. </p>',
                            keyFacts: [
                                'Cost-effective',
                                'Quick and easy to install',
                                'Lightweight but Strong and stable',
                                'Span greater distances allowing design flexibility',
                                'Versatile joist system – used for floors and roofs',
                                'Open web design allows easy access for services',
                                '6 standard joist depths - 202mm, 225mm, 253mm, 304mm, 373mm, 421mm'
                            ]
                        }
                    },
                    {
                        name: 'I-Joists',
                        order: 2,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/ibeam.jpg',
                        content: {
                            summary:
                                '<p>I-Joists are lighter, quick to install and easier to handle than traditional joists.</p><p>So called because of their I or H shaped cross-section, they are designed with a vertical web set between two horizontal flanges. This allows them to be used across longer spans while retaining their structural integrity, also making them squeak-free. Other benefits of I-Joists include hassle free installation and the channelled structure creating easier access for cabling and piping services.</p>',
                            keyFacts: [
                                'Cost-effective',
                                'Quick, easy and light to install',
                                '4 flange width options – 47mm, 63mm, 72mm, 97mm',
                                'Span longer distances without bowing or splitting',
                                'Excellent strength to weight ratio',
                                'Squeak-free',
                                'Sustainable and environmentally friendly'
                            ]
                        }
                    },
                    {
                        name: 'Floor Cassettes',
                        order: 3,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/floorcassette.jpg',
                        content: {
                            summary:
                                '<p>Pre-engineered flooring modules (panels), manufactured using either I-joists or Posi-joists to meet design requirements and incorporating specifications such as, support conditions, load conditions and floor penetrations. Although floor cassettes are best suited to simple rectangular floor plans, logical segmentation of a more complex floor plan into simple, identical rectangular sections allows for greater flexibility of design. These ready-made flooring panels allow for quicker, easier construction and are straightforward to install without the need for specialist skills, thus reducing overall project build time and costs. This easy-fit flooring solution reduces the Health and Safety risks on-site by providing contractors with a stable working platform negating the need for them to work over dangerous voids with a fall arrest system in place.</p>',
                            keyFacts: [
                                'Cost-effective and time-reducing',
                                'Quick and easy to install',
                                'Reduces on-site Health and Safety risks',
                                'Precision engineered',
                                'Flexible and versatile to design',
                                'Conforms to Robust Details for sound proofing'
                            ]
                        }
                    }
                ]
            },
            {
                name: 'Modular',
                order: 1,
                iconPath: '/resources/img/products/modular.png',
                mainImagePath: '/resources/img/products/mainImages/modular.jpg',
                content: {
                    summary:
                        'Complete Wall Panels for easier, faster installation. Using our Closed or Triso-Warm Panels we build complete modular systems for your homes. Our modular units incorporate service voids for factory fitted electrics and plumbing. Installed doors and windows along with external cladding allows for a speedy on-site installation. Internals, including drywall/plasterboard means less time and money spent onsite completing your project.'
                },
                subProducts: [
                    {
                        name: 'Factory Fitted Windows',
                        order: 1,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath: '/resources/img/products/windows.jpg',
                        content: {
                            summary:
                                'As part of our Modular range, we provide the option of fully factory-fitted doors and windows within the closed and Triso-warm wall panels. This option is becoming increasingly popular as these complete structure panels dramatically reduce both build time and build costs. We can potentially see a completely weathertight structure within just one day. The pre-fitting of windows and doors into the panels negates the need for an on-site storage facility, therefore there is no unnecessary site traffic, limited likelihood of breakages and no wasted space and time while waiting for relevant follow-on trades, all resulting in a quicker and more efficient build schedule.',
                            keyFacts: [
                                'Cost-effective and time saving',
                                'Fully-factory fitted, complete wall panel system',
                                'A wide range of windows and doors can be fitted – including patio doors',
                                'Clip on external ancillary cills',
                                'No worries about fitting obstructions due to scaffolding',
                                'Service Voids for Electrics, Plumbing etc.'
                            ]
                        }
                    },
                    {
                        name: 'External Cladding',
                        order: 2,
                        iconPath: '/vendors/img/image-placeholder.png',
                        mainImagePath:
                            '/resources/img/products/sub_products/externalCladding.jpg',
                        content: {
                            summary:
                                'The external cladding options for our modular homes are an innovative and modern solution for the outer skin of a building. A quick and cost-effective way to replicate the appearance of traditional brick, stone or wood facades but a less-hassle, lighter and more contemporary alternative. With a simple ‘click clip’ installation system, the cladding can either be factory-fitted onto our modular wall panels before being delivered to site or fitted on-site after erection. This negates the need for any wet trades, saving both time and money. The cladding has excellent energy efficiency, is low maintenance and comes in a variety of styles to suit the aesthetics of the build project. An ideal solution to enhance and protect a building’s facade.',
                            keyFacts: [
                                'Cost-effective and time saving',
                                'Fully-factory fitted, complete wall panel system',
                                'A wide range of windows and doors can be fitted – including patio doors',
                                'Clip on external ancillary cills',
                                'No worries about fitting obstructions due to scaffolding',
                                'Service Voids for Electrics, Plumbing etc.'
                            ]
                        }
                    }
                ]
            }
        ]
        //Seed products
        const Product = pygmy.models.model.Product.schema
        Product.remove({}, function() {
            products.forEach(seed => {
                let query = { name: seed.name }
                let update = seed
                let options = {
                    upsert: true,
                    new: true,
                    setDefaultsOnInsert: true
                }

                // Find the document
                Product.findOneAndUpdate(query, update, options, function(
                    err,
                    result
                ) {
                    if (err) {
                        log.error('Products: update error (' + err + ')')
                        return
                    }

                    // If nothing is found, add it
                    if (!result) {
                        Product.create(seed, err => {
                            if (err) {
                                log.error(
                                    'Products: create error (' + err + ')'
                                )
                            } else {
                                log.info('Products: Added (' + seed.name + ')')
                            }
                        })
                    }
                    // do something with the document
                })
            })
        })
    },
    seedCases: () => {
        // setup data
        let caseStudies = [
            {
                name: 'Chandlers Yard - Burryport',
                featured: true,
                client: 'Dawnus Construction',
                category: 'Residential',
                imagePaths: {
                    primary:
                        '/resources/caseStudies/Residential/Chandlers Yard - Burryport/chandlers-yard-burryport- dawnus 3.jpg',
                    other: [
                        '/resources/caseStudies/Residential/Chandlers Yard - Burryport/chandlers-yard-burryport- dawnus 2.jpg',
                        '/resources/caseStudies/Residential/Chandlers Yard - Burryport/chandlers-yard-burryport-3.jpg',
                        '/resources/caseStudies/Residential/Chandlers Yard - Burryport/chandlers-yard-burryport-6.jpg'
                    ]
                },
                text: {
                    summary:
                        '40 residential units in Burryport, Carmarthenshire.',
                    other: [
                        'Design, manufacture and erection of 40 residential units in Burryport, Carmarthenshire.  Constructed in 2008, Seven Oaks provided the timber frames, loose joists and roof structures for 18 apartments, 19 houses and 3 coach houses on this residential development.'
                    ]
                },
                keyFacts: [
                    {
                        main: '40',
                        sub: 'Units'
                    }
                ],
                date: '2020-01-01'
            },
            {
                name: 'Bluestone National Park Resort',
                featured: true,
                client: 'Bluestone National Park Resort',
                category: 'Commercial',
                imagePaths: {
                    primary:
                        '/resources/caseStudies/Commercial/Bluestone National Park Resort/bluestone-lodges.jpg',
                    other: [
                        '/resources/caseStudies/Commercial/Bluestone National Park Resort/bluestone1.jpg',
                        '/resources/caseStudies/Commercial/Bluestone National Park Resort/Screen-Shot-2016-12-05-at-11.24.40.jpg'
                    ]
                },
                text: {
                    summary:
                        'Design, manufacture and erection of 115 new Timber Lodges across two phases.',
                    other: [
                        'Design, manufacture and erection of 115 new Timber Lodges across two phases. Constructed in 2011 the first phase consisted of 65 lodges  followed by the second phase of 50 constructed in 2015. Seven Oaks provided the timber frame superstructures, floor cassettes , timber cladding and timber roof shingles on all 115 lodges.  The timber cladding was pre–installed on each panel in the factory which negated the need for follow on trades and provided a programme and cost saving to the client. The lodges are finished to a high specification to meet the resort’s 5 star credentials.'
                    ]
                },
                keyFacts: [
                    {
                        main: '115',
                        sub: 'Units'
                    }
                ],
                date: '2016-12-05'
            },
            {
                name: 'Campion Gardens',
                featured: true,
                client: 'Hale Construction',
                category: 'Extra Care',
                imagePaths: {
                    primary:
                        '/resources/caseStudies/Extra Care/Campion Gardens/23231647_1961765164075093_2569917785224873990_n.jpg',
                    other: [
                        '/resources/caseStudies/Extra Care/Campion Gardens/23380327_1961764530741823_6520003038525117904_n.jpg',
                        '/resources/caseStudies/Extra Care/Campion Gardens/23435061_1961764714075138_580876127798635652_n.jpg',
                        '/resources/caseStudies/Extra Care/Campion Gardens/Campion Garden Pic 1.jpg',
                        '/resources/caseStudies/Extra Care/Campion Gardens/Campion Garden Pic 2.jpg',
                        '/resources/caseStudies/Extra Care/Campion Gardens/cwmfelin250510 006.jpg'
                    ]
                },
                text: {
                    summary:
                        'Design, manufacture and erection of a purpose built, 130 Bed extra care facility.',
                    other: [
                        'Design, manufacture and erection of a purpose built extra care facility. Constructed in 2008, Seven Oaks provided the timber frames, loose joists, mansard roof structures for this 130 bed facility . The facility was constructed over two phases with the first phase consisting of two three storey blocks accommodating 92 residents in 88 single and 1 shared rooms (65 en suite). The second phase consisted of an additional three storey block assisted living scheme comprising of 30 number 2 bedroom apartments.',
                        'This was a luxury development with facilities including restaurant, coffee lounge, cocktail bar, library, cinema, visitor suites, relaxation rooms and an on-site surgery and beauty salon.'
                    ]
                },
                keyFacts: [
                    {
                        main: '130',
                        sub: 'Beds'
                    }
                ],
                date: '2008-05-01'
            },
            {
                name: 'Trawler Road - Swansea',
                featured: true,
                client: 'Jehu Project Services',
                category: 'Residential',
                imagePaths: {
                    primary:
                        '/resources/caseStudies/Residential/Trawler Road - Swansea/IMG_0940.JPG',
                    other: [
                        '/resources/caseStudies/Residential/Trawler Road - Swansea/IMG_0677.JPG',
                        '/resources/caseStudies/Residential/Trawler Road - Swansea/IMG_0679.JPG',
                        '/resources/caseStudies/Residential/Trawler Road - Swansea/IMG_0913.JPG'
                    ]
                },
                text: {
                    summary:
                        'Design, manufacture and erection of a residential apartment complex situated in the SA1 area of Swansea.',
                    other: [
                        'Design, manufacture and erection of  a residential  apartment complex situated in the SA1 area of Swansea. Constructed in 2017, Seven Oaks provided the timber frames, floor cassettes and flat roof structure for 50 apartments on this development. The timber frame structure of 3 storeys sits on a ground floor steel frame transfer slab.'
                    ]
                },
                keyFacts: [
                    {
                        main: '50',
                        sub: 'Apartments'
                    }
                ],
                date: '2017-05-01'
            },
            {
                name: 'Harbour View - Swansea',
                featured: true,
                client: 'Hale Homes',
                category: 'Residential',
                imagePaths: {
                    primary:
                        '/resources/caseStudies/Residential/Harbour View - Swansea/Harbour View - Hale.jpg',
                    other: [
                        '/resources/caseStudies/Residential/Harbour View - Swansea/67684_CRD120009_IMG_00_0000_max_656x437.jpg',
                        '/resources/caseStudies/Residential/Harbour View - Swansea/Harbour View - Hale 2.jpg'
                    ]
                },
                text: {
                    summary:
                        'Design, manufacture and erection of 30 three storey town houses in four blocks in the SA1 area of Swansea.',
                    other: [
                        'Design, manufacture and erection of 30 three storey town houses in four blocks in the SA1 area of Swansea.  Constructed in 2010, Seven Oaks provided the timber frames, floor cassettes and roof structures for this luxury eco development which incorporates our Triso-Warm hybrid SIP panel system. The development was designed to code for sustainable homes level 4.'
                    ]
                },
                keyFacts: [
                    {
                        main: '30',
                        sub: 'Residential Units'
                    }
                ],
                date: '2017-05-01'
            },
            {
                name: 'Coed Darcy - Llandarcy',
                featured: true,
                client: 'Dawnus Construction Ltd',
                category: 'Residential',
                imagePaths: {
                    primary:
                        '/resources/caseStudies/Residential/Coed Darcy - Llandarcy/p4120105.jpg',
                    other: [
                        '/resources/caseStudies/Residential/Coed Darcy - Llandarcy/Coed Darcy Post Office.jpg',
                        '/resources/caseStudies/Residential/Coed Darcy - Llandarcy/coed-darcy-1.jpg',
                        '/resources/caseStudies/Residential/Coed Darcy - Llandarcy/coed-darcy-5.jpg',
                        '/resources/caseStudies/Residential/Coed Darcy - Llandarcy/Coed-Darcy-IMG_1342-01L.jpg'
                    ]
                },
                text: {
                    summary:
                        'Design, manufacture and erection of the 56 dwellings in the , consisting of 2 & 3 storeys apartments and houses ranging from two to four bedrooms.',
                    other: [
                        'Design, manufacture and erection of the 56 dwellings in the , consisting of 2 & 3 storeys apartments and houses ranging from two to four bedrooms. Constructed in 2008, Seven Oaks provided the timber frame superstructures, steel frames and roof structures for all 56 dwellings on this project. All dwellings were delivered to Secured by Design and BREEAM Eco homes Excellent standards.'
                    ]
                },
                keyFacts: [
                    {
                        main: '56',
                        sub: 'Units'
                    }
                ],
                date: '2017-05-01'
            },
            {
                name: 'Hazel Court Care Home',
                featured: true,
                client: 'Cowlin Construction',
                category: 'Extra Care',
                imagePaths: {
                    primary:
                        '/resources/caseStudies/Extra Care/Hazel Court - Sketty/Hazel Court 1.png',
                    other: [
                        '/resources/caseStudies/Extra Care/Hazel Court - Sketty/Hazel Court 2.png',
                        '/resources/caseStudies/Extra Care/Hazel Court - Sketty/Hazel Court.jpg'
                    ]
                },
                text: {
                    summary:
                        'Design, manufacture and erection This purpose-built extra care facility in the Sketty area of Swansea. ',
                    other: [
                        'Design, manufacture and erection This purpose-built extra care facility in the Sketty area of Swansea. Constructed in 2008, Seven Oaks supplied the timber frames, cassette floors and flat roof structure for 120 apartments set over three blocks, with the highest block covering four storeys. ',
                        'The extra care facility has a wide range of communal facilities, which are widely used by both tenants and the wider community including Gym Therapy Room, Exercise Room, Community Hall,Training / Meeting Room, Craft and Hobbies Room, Library / IT Suite, Restaurant,Shop   and Hairdressing Salon.'
                    ]
                },
                keyFacts: [
                    {
                        main: '120',
                        sub: 'Bed Care Home'
                    }
                ],
                date: '2017-05-01'
            }
        ]

        //Seed case studies
        const Case = pygmy.models.model.Case.schema
        Case.remove({}, function() {
            caseStudies.forEach(seed => {
                let query = { name: seed.name }
                let update = seed
                let options = {
                    upsert: true,
                    new: true,
                    setDefaultsOnInsert: true
                }

                // Find the document
                Case.findOneAndUpdate(query, update, options, function(
                    err,
                    result
                ) {
                    if (err) {
                        log.error('Case: update error (' + err + ')')
                        return
                    }

                    // If nothing is found, add it
                    if (!result) {
                        Case.create(seed, err => {
                            if (err) {
                                log.error('Case: create error (' + err + ')')
                            } else {
                                log.info('Case: Added (' + seed.name + ')')
                            }
                        })
                    }
                    // do something with the document
                })
            })
        })
    },
    seedJobs: () => {
        // setup data
        let jobs = [
            {
                reference: 'SOM2018-STFE-01',
                name: 'Senior Timber Frame Estimator',
                numberNeeded: 0,
                description:
                    'Due to continued growth, SO Modular Ltd are seeking an experienced timber frame estimator to join our estimating department at our production facility in Neath, South Wales. SO Modular Ltd produces timber frame/modular structures for the UK Construction sector servicing a large client list including National House Builders and tier one Main Contractors.',
                date: '2018-09-30',
                responsibilities: [
                    'Interpret and accurately take off construction drawings to client specifications',
                    'Prepare detailed quotations for construction projects ranging up 150 residential units to be issued to clients ',
                    'Answer any client queries in relation to quotations',
                    'Liaise with clients and architects',
                    'Send out sub-contractor enquiries',
                    'Contract negotiation',
                    'Attend pre-contract and design team meetings'
                ],
                requirements: [
                    'Extensive experience of estimating timber frame construction projects across various sectors is essential.',
                    'Excellent IT skills on MS Packages with expert knowledge of Excel',
                    'Experience ideally of working in a sub-contractor environment',
                    'Good business and commercial awareness',
                    'Team player who can work in a fast paced environment',
                    'Able to manage workload and work to tight deadlines'
                ],
                package: '£32,000 - £35,000 plus benefits',
                contact: {
                    name: 'Charlotte Hale',
                    title: 'Operations Manager',
                    email: 'chale@somodular.co.uk'
                },
                location: 'Neath, South Wales'
            },
            {
                reference: 'SOM2018-TFM-01',
                name: 'Timber frame Manufacturer',
                numberNeeded: 0,
                description:
                    'Due to continued growth Seven Oaks Modular Ltd are looking for enthusiastic and hardworking Timber frame Manufacturers to join our Team. Ongoing contract with the chance of a permanent position for the right individuals. Working a two shift pattern; 6am to 2pm and 2pm to 10pm - times may vary.',
                responsibilities: [
                    'Operate machinery',
                    'Read complex design drawings',
                    'Follow strict health and safety protocols'
                ],
                requirements: [
                    'Full training will be provided',
                    'Team player who can work in a fast paced environment',
                    'Able to manage workload and work to tight deadlines'
                ],
                date: '2018-10-30',
                contact: {
                    name: 'Julian Thomas',
                    title: 'Factory Manager',
                    email: 'jthomas@somodular.co.uk'
                },
                package: 'Salary dependent on experience',
                location: 'Neath, South Wales'
            },
            {
                reference: 'SOM2018-TFD-01',
                name: 'Timber frame Designer',
                numberNeeded: 0,
                description:
                    "<p>Wales' leading timber frame manufacturer, SO Modular is looking for an expereinced timber frame designer.</p><p>It's an exciting time to join this 10m per annum company which also produces many modular construction components & systems.</p> ",
                responsibilities: [
                    'Design timber frame components and structures in CAD',
                    'Produce designs & drawings',
                    'Adapt to fast changing environment'
                ],
                requirements: [
                    'Experienced in auto CAD programs',
                    'Training will be provided to bridge between CAD programs',
                    'Team player who can work in a fast paced environment',
                    'Able to manage workload and work to tight deadlines'
                ],
                date: '2019-01-02',
                contact: {
                    name: 'Charlotte Hale',
                    title: 'Company Manager',
                    email: 'chale@somodular.co.uk'
                },
                package:
                    'Salary dependent on experience. Immediate start for the right candidate!',
                location: 'Neath, South Wales'
            },
            {
                reference: 'SOM2018-DRV-01',
                name: 'CLASS 2 HGV DRIVER',
                numberNeeded: 0,
                description:
                    '<p>SO Modular are looking to recruit an experienced and multi skilled professional HGV class II driver to join our established company.</p> ',
                responsibilities: [
                    'Deliver of timber frame products to sites around the country'
                ],
                requirements: [
                    'Have flexibility with regard to working hours',
                    'Possess a full Class II license',
                    'Be fully CPC qualified',
                    'Be physically active due to the nature of the role manual handling will be required',
                    'Have experience of the safe strapping of loads',
                    'Demonstrate excellent communication skills at all levels towards both customers and colleagues',
                    'Have a positive attitude and be of smart appearance upholding our company image at all times.'
                ],
                date: '2018-11-23',
                contact: {
                    name: 'Julian Thomas',
                    title: 'Factory Manager',
                    email: 'jthomas@somodular.co.uk'
                },
                package:
                    'Salary dependent on experience. Immediate start for the right candidate!',
                location: 'Neath, South Wales'
            },
            {
                reference: 'SOM2018-MGR-01',
                name: 'TRANSPORT MANAGER',
                numberNeeded: 0,
                description:
                    '<p>SO Modular Ltd are offering a fantastic opportunity for a Transport Manager to join an expanding company.</p><p>The successful candidate will manage the day to day running of our fleet of vehicles, but also take full responsibility of ensuring all the correct products are picked and loaded correctly from the production areas.</p> <p>Experience of stock checks/control would be desirable, but not necessary.</p>',
                responsibilities: [
                    'Take overall responsibility to ensure that all transport deliveries are delivered on time and completed.',
                    'Check and monitor manufacturing status daily and arrange accountability for all finished products.',
                    'Manage driver workforce to ensure efficient use of vehicles and resources.',
                    'Ensure efficient dispatch of vehicles and complete driver de briefs.',
                    'Maintain the vehicle fleet in good working order, whilst adhering to all current legislation.',
                    'Maximise the efficiency of the transport function.',
                    'Report and liaise closely with the Senior Management Team.'
                ],
                requirements: [
                    'Have flexibility with regard to working hours',
                    'Strong communication skills',
                    'Be fully CPC qualified',
                    'Be physically active due to the nature of the role manual handling will be required',
                    'Experience of stock checks/control *Not essential*',
                    'Demonstrate excellent communication skills at all levels towards both customers and colleagues',
                    'Have a positive attitude and be of smart appearance upholding our company image at all times.'
                ],
                date: '2018-12-05',
                contact: {
                    name: 'Julian Thomas',
                    title: 'Factory Manager',
                    email: 'jthomas@somodular.co.uk'
                },
                package:
                    'Salary dependent on experience. Immediate start for the right candidate!',
                location: 'Neath, South Wales'
            },
            {
                reference: 'SOM2018-FRK-01',
                name: 'FORKLIFT DRIVER',
                numberNeeded: 0,
                description:
                    '<p><b>Job Type: Full-time</b></p><p>SO Modular are looking for enthusiastic and conscientious Forklift Drivers for our workshop, working on Monday to Friday (6 – 2 and 2 - 10) shift patterns.</p>',
                responsibilities: [
                    'Providing excellent customer service',
                    'Completion of FLT daily check sheets',
                    'Unloading and loading of vehicles',
                    'Administration of stock control',
                    'Completion of and filing of all relevant paperwork',
                    'General warehouse duties',
                    'Good housekeeping',
                    'SO Modular is committed to equality of opportunity'
                ],
                requirements: [
                    'Licence: valid RIB or equivalent Forklift licence (Required)',
                    'Able to work as part of a team and on own initiative',
                    'Ensure excellent customer service',
                    'Forklift Operating: 1 year (Preferred)'
                ],
                date: '2019-01-15',
                contact: {
                    name: 'Julian Thomas',
                    title: 'Factory Manager',
                    email: 'jthomas@somodular.co.uk'
                },
                package:
                    'Salary dependent on experience. Immediate start for the right candidate!',
                location: 'Neath, South Wales'
            },
            {
                reference: 'SOM2018-ARC-01',
                name: 'ARCHITECTURAL TECHNICIAN',
                numberNeeded: 0,
                description:
                    '<p><b>Job Type: Full-time</b></p><p>SO Modular are looking to fill a number of important vacancies within our Company.</p><p>We have an immediate requirement for an experienced Architectural Technician to join our busy design team.</p><p>In order to be considered for this unique opportunity, we would hope that applicants meet the following criteria:</p>',
                responsibilities: [
                    'Ability to produce Technical drawing information',
                    'To successfully managed projects independently (Or with minimal supervision)',
                    'Manage workloads effectively'
                ],
                requirements: [
                    'To hold a relevant Architectural Qualification (Degree, HNC, HAND)',
                    'Minimum 2 years practical experience, preferable within a UK-based firm',
                    'To be an effective communicator; Both written and verbal skills',
                    'Experience using REVIT software would be useful, however training can be provided',
                    'Good working knowledge of current UK Building Regulations',
                    'Timber frame knowledge preferred but not essential'
                ],
                date: '2019-01-15',
                contact: {
                    name: 'Charlotte Hale',
                    title: 'Company Manager',
                    email: 'chale@somodular.co.uk'
                },
                package: 'Salary dependent on experience.',
                location: 'Neath, South Wales'
            }
        ]

        //Seed case studies
        const Job = pygmy.models.model.Job.schema
        Job.remove({}, function() {
            jobs.forEach(seed => {
                let query = { name: seed.name }
                let update = seed
                let options = {
                    upsert: true,
                    new: true,
                    setDefaultsOnInsert: true
                }

                // Find the document
                Job.findOneAndUpdate(query, update, options, function(
                    err,
                    result
                ) {
                    if (err) {
                        log.error('Job: update error (' + err + ')')
                        return
                    }

                    // If nothing is found, add it
                    if (!result) {
                        Job.create(seed, err => {
                            if (err) {
                                log.error('Job: create error (' + err + ')')
                            } else {
                                log.info('Job: Added (' + seed.name + ')')
                            }
                        })
                    }
                    // do something with the document
                })
            })
        })
    },
    seedNews: () => {
        // setup data
        let news = [
            {
                name: 'SO Modular celebrates win at regional awards',
                category: 'News',
                mainImage: {
                    path:
                        '/resources/news/Charlotte Hale - Director of Sevenoaks Modular.jpg'
                },
                content:
                    '<p>Celebrating its rapid growth and commitment to innovation, SO Modular Ltd has been named as one of the winners at The Welsh Women’s Awards, which took place on 3 April.</p><p>The awards, which took place at The Exchange Hotel, Cardiff, recognised Charlotte Hale, director of SO Modular, as the winner of the Entrepreneur of the Year award for her commitment to developing and growing the company since its launch in June 2018.</p><p>SO Modular continues to be at the forefront of innovative and creative solutions within the construction industry, pushing boundaries and developing products that enable it to boost efficiency, sustainability and cost-effectiveness across a diverse range of construction projects.</p><p>Its current research and development projects consist of manufacturing carbon-neutral but affordable timber-frame homes. These thermally efficient homes have U-values so low, they require minimal heating and cooling, potentially completely removing the need for a central heating system at all.</p><p>Charlotte Hale, director of SO Modular, said:</p><p>“I am thrilled to have won Entrepreneur of the Year at The Welsh Women’s Awards. I am passionate about making SO Modular an innovative, environmentally friendly and sustainable company – with the aim of making our planet as sustainable as can be. </p><p>“We have some really exciting plans for the next 12 months that will see SO Modular expand, grow and create more jobs, which in turn will support the local economy.”</p><p>The Welsh Women’s Awards, run by Creative Oceanic, is just one of the categories of awards run by the event host. Creative Oceanic operates and delivers events such as The Welsh Women’s Awards in nine different cities across the UK, Ireland and Canada. Some of the award ceremonies it runs in Wales are: The Welsh Hospitality Awards; The Welsh Wedding Awards; The Food Awards Wales; and The Welsh Independent Retail Awards, to name but a few.</p>',
                date: '2019-04-04'
            },
            {
                name: 'Prostrate Cancer UK',
                category: 'News',
                mainImage: {
                    path: '/resources/news/prostate-cancer.jpg'
                },
                content:
                    '<p>SO Modular are raising money in aid of Prostate Cancer UK.<p>A team of 20 members of staff are doing the Pen Y Fan climb on Sunday 24th March.</p><p>Please follow the link below to our just giving page.  We would be grateful for any donations:</p><a href="https://www.justgiving.com/fundraising/SO-Modular">Just Giving</a>',
                date: '2019-02-26'
            },
            {
                name: 'Chiltern in progress',
                category: 'News',
                mainImage: {
                    path: '/resources/news/chiltern.jpg'
                },
                content:
                    "<p>One of our projects is underway in chiltern. Panels produced & delivered, cranes up and running. Check back soon to see the completed builds.</p> <img src='/resources/news/chiltern2.jpg'>",
                date: '2018-12-14'
            },
            {
                name: 'Movember',
                category: 'News',
                mainImage: {
                    path: '/resources/news/Movember.jpg'
                },
                content:
                    "<p>November is approaching and we will be raising money for the Movember Foundation to support mental health and cancer.</p><p>Our staff will be paticipating in this event and for anyone who would like to get involved are welcome too.</p><p>Visit our team page in the link below to donate, see more information and join in!</p><a href='https://moteam.co/so-modstaches?mc=1'>moteam.co</a>",
                date: '2018-10-31'
            },
            {
                name: 'New brand, new website',
                category: 'News',
                mainImage: {
                    path: '/resources/img/logo/logo-full.svg'
                },
                content:
                    "<p>Seven oaks Modular has been rebranded with thanks to <a href='https://www.techmeleon.co.uk'>Techmeleon</a></p><p>A new modern website and technelogical updates to its processes will ensure SOM will continue to be a leader in the timber frame sector manufacturing sector.</p>",
                date: '2018-10-01'
            },
            {
                name: 'Seven Oaks Pricing',
                category: 'News',
                mainImage: {
                    path: '/resources/news/soPricing.jpg'
                },
                content:
                    "<p>SOM have commissioned a new pricing system for the quotation process of tenders. With the assistance of <a href='https://www.techmeleon.co.uk'>Techmeleon</a> a fully dynamic, structured and adaptable system has been created to produce competative, fast & accurate pricing.</p>",
                date: '2018-09-07'
            },
            {
                name: 'Neath based timber company set to grow by 5 million',
                category: 'News',
                mainImage: {
                    path: '/resources/news/growth.jpg'
                },
                content:
                    '<p>Seven Oaks Modulars, the award-winning Neath based timber frame manufacturer, looks set to reach its £6million growth target as it doubles its factory space and invests in new staff and equipment.</p> <p>The company has recently purchased one and a half acres of land adjacent to its existing one acre site. The new space will be incorporated into the current site to create a high end, purpose built environment to store and prepare timber frames. </p> <p>At present the company produces enough panels to make 12 homes a week, but it is planned that by the end of 2018, that number will double. To enable the increase in output, a £300,000 investment has been made to purchase a new eco press, and £100,000 in new lorries.</p> <p>Seven Oaks has also invested in new marketing staff, 10 new lorry drivers and two new trainee timber designers. The trainee designers will work across projects for local authorities, private contractors and housing associations, as the company expands its remit and reach across the UK.</p> <p>Seven Oaks Timberframe currently supplies timber frame and composite construction solutions to major house builders and construction companies across the UK.</p> <p> It also supplies all the frames required by sister company J G Hale Construction; playing a contributing role in the construction company’s recent success at the LABC South Wales Building Excellence Awards.</p> <p>The growth has largely been driven by Seven Oaks Timberframe’s development of Triso-warm, an innovative type of insulated timber frame that has the capacity to significantly reduce heating and energy bills. </p> <p>Earlier this year, Triso-warm became the only UK produced timber frame of its kind to gain BBA approval – the stamp of approval required by the construction industry.</p> <p>Chairman of Seven Oaks, Jonathan Hale commented:</p> <p>“This is a really exciting time for Seven Oaks Modular. We have spent a long time building up our staff expertise and investing in the right equipment to produce Triso-warm frames. Now the time is right to take what we’ve achieved and significantly increase our output. Having the extra land, new drivers and designers joining will enable us to make the leap a reality.”</p>',
                date: '2018-07-03'
            },
            {
                name:
                    'Seven Oaks attends the Explore Offsite South West Conference in Exeter',
                category: 'News',
                mainImage: {
                    path: '/resources/news/Offsite-Explore-Exeter-Photo.jpg',
                    caption:
                        'Senior Designer Warren Rowlands and Business Development Officer Robert Spear meeting with Aquarian Cladding Systems.'
                },
                content:
                    "<p>Explore Offsite Exeter – Two members of our team at Seven Oaks recently attended the Explore Offsite South West Conference in Exeter. Senior Designer Warren Rowlands and Business Development Officer Robert Spear met with various offsite organisations to gain further knowledge and insight into the Offsite modular movement, which is showing great opportunity within the construction community in the UK.</p> <p> Seven Oaks moving forward are looking to introduce more bespoke modular products in to their range as the UK housing market leans towards offsite production as a means to counteract a skills shortage within the construction sector. </p> <img src='/resources/news/Explore-Offsite-South-West-Logo.jpg'>",
                date: '2018-04-03'
            },
            {
                name: 'Triso-Warm achieves BBA approval',
                category: 'News',
                content:
                    '<p>Seven Oaks, wales leading timber frame manufacturer and supplier, has been granted approval by the british board of agrément for Triso-Warm®, an innovative timber frame building panel which has the capacity to cut heating and energy bills to virtually zero. Triso-warm achieves ultra-low u-values with high strength panels, promoting off-site manufacture with factory controlled quality.</p> <h4>Always insist on BBA approved panels</h4> <p>Third party certification is extremely important for construction products. Certification means that an independent body has reviewed the manufacturing process of a particular product. It has been independently determined that the final product complies with safety, industry standards. Quality and conforms to british and european standards.</p> <p>This valuable third party endorsement for a product’s performance gives specifiers and contractors extra reassurance that products have been rigorously tested.</p> ',
                date: '2017-08-15'
            },
            {
                name:
                    'Seven Oaks Timber Frame are proud sponsors of the 2016 Building Excellence Awards',
                category: 'News',
                mainImage: {
                    path: '/resources/news/labc2016.jpg'
                },
                content:
                    '<p>For the second year running Seven Oaks are proud to be the main sponsor of the labc building excellence awards a prestigeous event for professionals to be recognised and celebrate their achievements in the construction industry. They reward excellent buildings, outstanding companies, and partnerships and individuals that go that extra mile.</p> <p>The LABC network covers all local authorities in England and Wales and is split into 12 regions, each of which holds their own awards.</p> <p><b>Unlike other awards, it’s not all about looks! LABC consider other vital elements including:</b></p><ul><li>High levels of compliance with building regulations</li><li>Effective working relationships with LABC surveyors</li><li>Outstanding craftsmanship</li><li>Technical innovation</li><li>Sustainability and high performance</li><li>Ability to solve technical problems with creative solutions</li><li>Use of innovative products and the skills to overcome difficult site conditions</li></ul> <p>Regional winners in each category are automatically shortlisted for the LABC Grand Finals which are held in London.</p>',
                date: '2016-10-20'
            }
        ]

        //Seed new users
        const News = pygmy.models.model.News.schema
        News.remove({}, function() {
            news.forEach(seed => {
                let query = { name: news.name }
                let update = seed
                let options = {
                    upsert: true,
                    new: true,
                    setDefaultsOnInsert: true
                }

                // Find the document
                News.findOneAndUpdate(query, update, options, function(
                    err,
                    result
                ) {
                    if (err) {
                        log.error('News: update error (' + err + ')')
                        return
                    }

                    // If nothing is found, add it
                    if (!result) {
                        News.create(seed, err => {
                            if (err) {
                                log.error('News: create error (' + err + ')')
                            } else {
                                log.info('News: Added (' + seed.name + ')')
                            }
                        })
                    }
                    // do something with the document
                })
            })
        })
    },
    seedSocial: () => {
        // setup data
        let social = [
            {
                name: 'Twitter',
                link: 'https://twitter.com/somodular',
                icon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                name: 'Facebook',
                link: 'https://www.facebook.com/SOModular/',
                icon: '<i class="fab fa-facebook-square"></i>'
            },
            {
                name: 'Google-plus',
                link: '',
                icon: '<i class="fab fa-google-plus-square"></i>'
            },
            {
                name: 'YouTube',
                link: '',
                icon: '<i class="fab fa-youtube-square"></i>'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/somodular/?hl=en',
                icon: '<i class="fab fa-instagram"></i>'
            },
            {
                name: 'LinkedIn',
                link:
                    'https://www.linkedin.com/company/seven-oaks-timber-frame-ltd/',
                icon: '<i class="fab fa-linkedin"></i>'
            }
        ]

        //Seed new users
        const Social = pygmy.models.model.Social.schema
        social.forEach(seed => {
            let query = { name: seed.name }
            let update = seed
            let options = { upsert: true, new: true, setDefaultsOnInsert: true }

            Social.findOneAndUpdate(query, update, options, function(
                err,
                result
            ) {
                if (err) {
                    log.error('Socials: update error (' + err + ')')
                    return
                }

                // If nothing is found, add it
                if (!result) {
                    Social.create(seed, err => {
                        if (err) {
                            log.error('Socials: create error (' + err + ')')
                        } else {
                            log.info('Socials: Added (' + seed.name + ')')
                        }
                    })
                }
                // do something with the document
            })
        })
    }
}

/* ------------------------------------------------ */

/* Module export. */
/* ------------------------------------------------ */

module.exports = output

/* ------------------------------------------------ */
