package ca.girlfriendgetaway.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping(value= {"/", "/about**", "/register", "/login", "/logout", "/admin/**", "/account/**", "^(?!.*(api))"})
	public String index() {
		return "index";	
	}
	
}
