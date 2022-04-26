package com.PFA.main.Service;


import com.PFA.main.Model.Medication;
import com.PFA.main.Model.MedicationQuantity;
import com.PFA.main.Model.Pharmacy;
import com.PFA.main.Repository.MedicationRepository;
import com.PFA.main.Repository.PharmacyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MedicationService {

    @Autowired
    MedicationRepository medicationRepository;
    @Autowired
    PharmacyRepository pharmacyRepository;

    public void addMedication(Medication m) {
    	medicationRepository.save(m);
    }
    
    public void deleteMedication(Long id) {
    	medicationRepository.deleteById(id);;
    }
    
    public void updateMedication(Medication m) throws Exception {

        if (m.getId()!= null)medicationRepository.save(m);
        else throw new Exception("User Dosen,t Exist");
	}
    
    public List<Medication> searchMedicationByName(String name) {	
    	return medicationRepository.findAll().stream().filter(medication -> medication.getName().matches('*'+ name +'*')).collect(Collectors.toList());
    }
    

    public List<Medication> getMedicationQuantityByPharmacy(Long id) {
	
    	List<MedicationQuantity> mq=pharmacyRepository.findById(id).get().getMedications();
    	return null;
    }
    /*
    public List<Pharmacy> getMedicationLocation(Long id) {
    	return medicationRepository.findById(id).get().getPharmacies();
    }*/

}
