const Sails = require('sails');
let sails;

before(function (done) {
  this.timeout(30000);

  Sails.lift({
    models: {
      migrate: 'alter'
    },
    datastores: {
      default: {
        adapter: 'sails-postgresql',
        url: 'postgres://itman:X3DIZhYNKJYq2gczIJ1qi8uCzQqFGm2V@dpg-cpdq0tfsc6pc7395nrv0-a.oregon-postgres.render.com/dbitman_6mxv',
      },
    },
    log: {
      level: 'info'
    }
  }, function (err, server) {
    if (err) return done(err);
    sails = server;
    done();
  });
});

after(function (done) {
  Sails.lower(done);
});
