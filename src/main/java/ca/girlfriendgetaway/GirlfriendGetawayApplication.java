package ca.girlfriendgetaway;

import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import ca.girlfriendgetaway.entities.accounting.Invoice;
import ca.girlfriendgetaway.entities.accounting.InvoiceItem;
import ca.girlfriendgetaway.entities.accounting.Item;
import ca.girlfriendgetaway.entities.business.Booking;
import ca.girlfriendgetaway.entities.business.Craft;
import ca.girlfriendgetaway.entities.business.Getaway;
import ca.girlfriendgetaway.entities.user.Address;
import ca.girlfriendgetaway.entities.user.Authority;
import ca.girlfriendgetaway.entities.user.RoleEnum;
import ca.girlfriendgetaway.entities.user.User;
import ca.girlfriendgetaway.repositories.AuthorityRepository;
import ca.girlfriendgetaway.repositories.BookingRepository;
import ca.girlfriendgetaway.repositories.CraftRepository;
import ca.girlfriendgetaway.repositories.GetawayRepository;
import ca.girlfriendgetaway.repositories.InvoiceRepository;
import ca.girlfriendgetaway.repositories.UserRepository;

@SpringBootApplication
public class GirlfriendGetawayApplication {

	@Bean
	public CommandLineRunner demo(UserRepository repository, AuthorityRepository authRepository, CraftRepository crepository, BookingRepository brepository, GetawayRepository grepository) {
		return (args) -> {
			
			repository.deleteAllInBatch();
			authRepository.deleteAllInBatch();
			
			Address address = new Address(147, "Wood Cres", "Bradford", "L3Z2G4", "Ontario", "Canada");
			User greg = repository.save(new User("greg", "greg", "hepburn", "ghepburn@hotmail.ca", "password", address));
			authRepository.save(new Authority(greg.getUsername(), RoleEnum.ROLE_ADMIN, true));
			
			Address valAddress = new Address(3992, "County Road 88", "Bradford", "L3Z2G4", "Ontario", "Canada");
			User val = repository.save(new User("val", "val", "venturo", "vhepburn@hotmail.ca", "password", valAddress));
			authRepository.save(new Authority(val.getUsername(), RoleEnum.ROLE_USER, true));
			
			
			Craft painting = crepository.save(new Craft("painting", "painting class"));
			Craft blanket = crepository.save(new Craft("blanket", "quilting class"));
					
			Booking booking = new Booking(new Date(01012020), new Date(01022020), new Date(01022020), greg);
	
			List<Craft> crafts = Arrays.asList(blanket, painting);

			Getaway getaway = grepository.save(new Getaway(booking, Arrays.asList(greg, val), crafts, "a invoice", 1, 0, ""));
			
			
		};
	}
	
	public static void main(String[] args) {
		SpringApplication.run(GirlfriendGetawayApplication.class, args);
	}

}
