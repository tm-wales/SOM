/* Set variables and constants. */
/* ------------------------------------------------*/
    global.__pygmydir = __dirname + "/pygmy";
    global.pygmy = require(__pygmydir)

/* ------------------------------------------------*/

/* Initialise. */
/* ------------------------------------------------*/
    pygmy.appDirectory = __dirname;

    pygmy.init(() => {
        pygmy.util.logger.info('Pygmy Initialised')

        /* Reference custom models */
        const models = pygmy.models;
        models.add('Product', true, 'product.js','admin/editData/product')
        models.add('Case', true, 'case.js','admin/editData/case')
        models.add('News', true, 'news.js','admin/editData/news')
        models.add('Job', true, 'job.js','admin/editData/job')

        /* Seed custom data here */
        const custom = require("./app/seed");
        custom.seedPages();
        custom.seedProducts();
        custom.seedCases();
        custom.seedNews();
        custom.seedSocial();
        custom.seedJobs();

        /* Set Routes */
        const routes = pygmy.routes;

        /* Add custom routes here */
        routes.add('home', true, '/','home.js',0)
        routes.add('benefits', true, '/benefits','benefits.js',0)
        routes.add('sustainability', true, '/sustainability','sustainability.js',0)
        routes.add('about', true, '/aboutus','about.js',0)
        routes.add('cases', true, '/case-studies','cases.js',0)
        routes.add('news', true, '/news','news.js',0)
        routes.add('products', true, '/products','products.js',0)
        routes.add('contact-us', true, '/contact-us','contact-us.js',0)
        routes.add('jobs', true, '/jobs','jobs.js',0)

        /* Start app */
        pygmy.start(() => {

        });
    });

/* ------------------------------------------------*/