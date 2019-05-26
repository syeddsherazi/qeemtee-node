const Traveller = require('../models/traveller.model');

// TODO: BETTER GENERIC RESPONSE HANDLING
// TODO: BETTER ERROR HANDLING, TRY CATCHES AND ERROR MESSAGES TO COME FROM CONSTANTS
exports.create = function (req, res, next) {
    let traveller = new Traveller(
        {
            name: req.body.name,
            email: req.body.email,
            birthDate: new Date(req.body.birthDate),
            mobileNumber: req.body.mobileNumber
        }
    );

    traveller.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send({ success: 1 });
    })
};

exports.list = function (req, res, next) {
    Traveller.find({}, function (err, travellers) {
        if (err) return next(err);
        res.send({ travellers: travellers });
    });
};

exports.details = function (req, res, next) {
    Traveller.findById(req.params.id, function (err, traveller) {
        if (err) return next(err);
        res.send(traveller);
    });
};

exports.update = function (req, res, next) {
    Traveller.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, traveller) {
        if (err) return next(err);
        res.send(traveller);
    });
};

exports.delete = function (req, res, next) {
    Traveller.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send({ deleted: 1 });
    })
};