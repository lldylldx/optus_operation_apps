#!/usr/bin/perl

use CGI qw/:standard/;
use WWW::Mechanize;

print "Content-type: text/html\n\n";

my $url = "https://ifmsprod.optus.com.au/IFMSWeb1P/Secure/SignIn.aspx";

my $mech = WWW::Mechanize->new();
$mech->get($url);
#print $mech->content();
# $mech->cookie_jar(HTTP::Cookies->new());
# $mech->get($url);
#print $mech->content();
$mech->field('ctl00$cphPage$Login$UserName' => '55594');
$mech->field('ctl00$cphPage$Login$Password' => 'Qwer!234');
$mech->click();
#print $mech->content();
# $mech->get($url);

$ifms_no = '10986219';
	
my $ifms_str = "http://ifmsprod.optus.com.au/IFMSWeb1P/PR%20Manage/F012_ProblemDetail.aspx?SD_NO=$ifms_no";

$mech->get($ifms_str);

my $output_page = $mech->content();

my @output = split(/\r/,$output_page);

# @body = ();

for (my $i=0;$i<=scalar @output;$i++) {
	
	if (@output[$i] =~ /ctl00\$cphPage\$sectionDetail/) {
		do {
			# push (@body, @output[$i]);
			print @output[$i];
			$i++;
		} until (@output[$i] =~ /<\/textarea>/);
	}
}