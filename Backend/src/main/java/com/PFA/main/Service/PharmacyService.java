package com.PFA.main.Service;

import com.PFA.main.Model.Medication;
import com.PFA.main.Model.MedicationQuantity;
import com.PFA.main.Model.MedicationQuantityKey;
import com.PFA.main.Model.Pharmacy;
import com.PFA.main.Repository.MedicationQuantityRepository;
import com.PFA.main.Repository.MedicationRepository;
import com.PFA.main.Repository.PharmacyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PharmacyService {

    @Autowired
    PharmacyRepository pharmacyRepository;
    @Autowired
    MedicationQuantityRepository medicationQuantityRepository;
    @Autowired
    MedicationRepository medicationRepository;

    public void addPharmacy(Pharmacy p) {
        pharmacyRepository.save(p);
    }
   public Pharmacy getPharmacy(Long pharmacy_id) {
		return pharmacyRepository.findById(pharmacy_id).get();
   }
    public void addMedicationToPharmacy(Long medication_id, Long pharmacy_id,int quantity) throws Exception {
        Pharmacy pharmacy = pharmacyRepository.findById(pharmacy_id).get();
        Medication medication=medicationRepository.findById(medication_id).get();
        MedicationQuantity mq = new MedicationQuantity();
        mq.setPharmacy(pharmacy);
        mq.setMedication(medication);
        mq.setQuantity(quantity);
        MedicationQuantityKey key=new MedicationQuantityKey(medication_id,pharmacy_id);
        mq.setId(key);
        medicationQuantityRepository.save(mq);
    }

    public void deletePharmacy(Long id) {
        pharmacyRepository.deleteById(id);
    }

    public void updatePharmacy(Pharmacy p) {
        pharmacyRepository.save(p);
    }

    public List<String> getTownsOfPharmacy(){
        return pharmacyRepository.findAll().stream().map(Pharmacy::getTown).collect(Collectors.toList());
    }

}
