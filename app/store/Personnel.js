Ext.define('extTestTs.store.Personnel', function (Personnel) {
    return new MemoryStore("personnel", [
        'name', 'email', 'phone'
    ], [
        new Individual("man", "etsigoustaro@thefirm.com", "+306969696969"),
        new Individual("Jean Luc", "jeanluc.picard@enterprise.com", "555-111-1111"),
        new Individual("Worf", "worf.moghsson@enterprise.com", "+30 696 969 6969"),
        new Individual("Deanna", "mr.data@enterprise.com", "+30 6969696969"),
        new Individual("Data", "deanna.troi@enterprise.com", "+30-6969696969"),
    ]).toExtJS();
    return {};
});
//# sourceMappingURL=Personnel.js.map