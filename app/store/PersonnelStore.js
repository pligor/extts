/**
 * Created by student on 27/5/2016.
 */
///<reference path="Individual.ts"/>
var PersonnelStore = (function () {
    function PersonnelStore() {
    }
    PersonnelStore.alias = 'store.personnel';
    PersonnelStore.fields = [
        'name', 'email', 'phone'
    ];
    /*private*/ PersonnelStore.rootProperty = "items";
    PersonnelStore.items = [
        new Individual("Superman43", "etsigoustaro@thefirm.com", "+306969696969"),
        new Individual("Jean Luc", "jeanluc.picard@enterprise.com", "555-111-1111"),
        new Individual("Worf", "worf.moghsson@enterprise.com", "+30 696 969 6969"),
        new Individual("Deanna", "mr.data@enterprise.com", "+30 6969696969"),
        new Individual("Data", "deanna.troi@enterprise.com", "+30-6969696969"),
    ];
    return PersonnelStore;
}());
//# sourceMappingURL=PersonnelStore.js.map